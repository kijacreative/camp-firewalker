"use client";

import Link from "next/link";
import { Minus, Plus, Shirt, Trash2, X } from "lucide-react";
import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { formatPrice, merchProducts, type MerchProduct } from "./merch/products";

type CartLine = {
  key: string;
  productId: string;
  size?: string;
  quantity: number;
};

type CartContextValue = {
  count: number;
  addItem: (product: MerchProduct, size?: string) => void;
  openCart: () => void;
};

const storageKey = "camp-firewalker-merch-basket";
const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [checkoutState, setCheckoutState] = useState<"idle" | "loading" | "error">("idle");
  const [checkoutMessage, setCheckoutMessage] = useState("");
  const [purchaseComplete, setPurchaseComplete] = useState(false);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const checkoutComplete = new URLSearchParams(window.location.search).get("checkout") === "success";
        if (checkoutComplete) {
          window.localStorage.removeItem(storageKey);
          setPurchaseComplete(true);
        } else {
          const saved = window.localStorage.getItem(storageKey);
          if (saved) setLines(JSON.parse(saved) as CartLine[]);
        }
      } catch {
        window.localStorage.removeItem(storageKey);
      } finally {
        setHydrated(true);
      }
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(storageKey, JSON.stringify(lines));
  }, [hydrated, lines]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.classList.add("cart-open");
    document.addEventListener("keydown", onKeyDown);
    closeButton.current?.focus();
    return () => {
      document.body.classList.remove("cart-open");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const detailedLines = useMemo(
    () => lines.flatMap((line) => {
      const product = merchProducts.find((item) => item.id === line.productId);
      return product ? [{ ...line, product }] : [];
    }),
    [lines],
  );

  const count = lines.reduce((total, line) => total + line.quantity, 0);
  const subtotal = detailedLines.reduce(
    (total, line) => total + line.product.price * line.quantity,
    0,
  );

  const addItem = (product: MerchProduct, size?: string) => {
    const key = `${product.id}:${size ?? "standard"}`;
    setLines((current) => {
      const existing = current.find((line) => line.key === key);
      if (existing) {
        return current.map((line) =>
          line.key === key ? { ...line, quantity: line.quantity + 1 } : line,
        );
      }
      return [...current, { key, productId: product.id, size, quantity: 1 }];
    });
    setOpen(true);
  };

  const changeQuantity = (key: string, change: number) => {
    setLines((current) => current.flatMap((line) => {
      if (line.key !== key) return [line];
      const quantity = line.quantity + change;
      return quantity > 0 ? [{ ...line, quantity }] : [];
    }));
  };

  const checkoutBody = detailedLines
    .map((line) => `${line.quantity} × ${line.product.name}${line.size ? ` (${line.size})` : ""} — ${formatPrice(line.product.price * line.quantity)}\n   Source: ${line.product.source.maker} ${line.product.source.model}, ${line.product.source.color}\n   Decoration: ${line.product.source.decoration}`)
    .join("\n");
  const checkoutHref = `mailto:firewalkertx@gmail.com?subject=${encodeURIComponent("Camp Firewalker merch order request")}&body=${encodeURIComponent(`I'd like to request the following Camp Firewalker merchandise:\n\n${checkoutBody}\n\nEstimated merchandise total: ${formatPrice(subtotal)}\n\nName:\nPreferred contact method:\nPickup or shipping preference:`)}`;

  async function beginCheckout() {
    setCheckoutState("loading");
    setCheckoutMessage("");
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: lines.map(({ productId, size, quantity }) => ({ productId, size, quantity })) }),
      });
      const result = await response.json() as { url?: string; error?: string };
      if (!response.ok || !result.url) throw new Error(result.error || "Checkout could not be started.");
      window.location.assign(result.url);
    } catch (error) {
      setCheckoutMessage(error instanceof Error ? error.message : "Checkout could not be started.");
      setCheckoutState("error");
    }
  }

  return (
    <CartContext.Provider value={{ count, addItem, openCart: () => setOpen(true) }}>
      {children}
      {purchaseComplete && (
        <div className="checkout-toast" role="status">
          <strong>Thank you. Your order is confirmed.</strong>
          <button type="button" onClick={() => setPurchaseComplete(false)} aria-label="Dismiss confirmation"><X aria-hidden="true" /></button>
        </div>
      )}
      {open && (
        <aside className="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="cart-title">
          <button className="cart-backdrop" type="button" aria-label="Close merch basket" onClick={() => setOpen(false)} />
          <div className="cart-panel">
            <div className="cart-head">
              <div>
                <span>Merch basket</span>
                <h2 id="cart-title">Your field kit</h2>
              </div>
              <button ref={closeButton} className="icon-button" type="button" aria-label="Close merch basket" onClick={() => setOpen(false)}>
                <X aria-hidden="true" />
              </button>
            </div>

            {detailedLines.length === 0 ? (
              <div className="cart-empty">
                <Shirt aria-hidden="true" />
                <h3>Your basket is ready for the trail.</h3>
                <p>Add a piece of Camp Firewalker gear and help carry the mission into the community.</p>
                <Link className="button primary" href="/merch" onClick={() => setOpen(false)}>Explore merch</Link>
              </div>
            ) : (
              <>
                <div className="cart-lines">
                  {detailedLines.map((line) => (
                    <article className="cart-line" key={line.key}>
                      <img src={line.product.image} alt="" />
                      <div>
                        <h3>{line.product.name}</h3>
                        <p>{line.size ? `Size ${line.size}` : line.product.category}</p>
                        <strong>{formatPrice(line.product.price)}</strong>
                        <div className="cart-line-actions">
                          <div className="quantity-control" aria-label={`Quantity for ${line.product.name}`}>
                            <button type="button" aria-label={`Remove one ${line.product.name}`} onClick={() => changeQuantity(line.key, -1)}><Minus aria-hidden="true" /></button>
                            <span>{line.quantity}</span>
                            <button type="button" aria-label={`Add one ${line.product.name}`} onClick={() => changeQuantity(line.key, 1)}><Plus aria-hidden="true" /></button>
                          </div>
                          <button className="remove-line" type="button" aria-label={`Remove ${line.product.name} from basket`} onClick={() => setLines((current) => current.filter((item) => item.key !== line.key))}>
                            <Trash2 aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
                <div className="cart-summary">
                  <div><span>Estimated total</span><strong>{formatPrice(subtotal)}</strong></div>
                  <p>Secure checkout is processed by Stripe. Shipping details are collected before payment.</p>
                  <button className="button primary cart-checkout" type="button" onClick={beginCheckout} disabled={checkoutState === "loading"}>
                    {checkoutState === "loading" ? "Opening secure checkout..." : "Secure checkout"}
                  </button>
                  {checkoutState === "error" && <p className="checkout-error" role="alert">{checkoutMessage}</p>}
                  <a className="cart-request" href={checkoutHref}>Request order by email</a>
                  <button className="cart-continue" type="button" onClick={() => setOpen(false)}>Continue shopping</button>
                </div>
              </>
            )}
          </div>
        </aside>
      )}
    </CartContext.Provider>
  );
}

export function MerchBasketButton() {
  const cart = useContext(CartContext);
  if (!cart) return null;
  return (
    <button className="merch-basket-button" type="button" onClick={cart.openCart} aria-label={`Open merch basket with ${cart.count} ${cart.count === 1 ? "item" : "items"}`}>
      <Shirt aria-hidden="true" />
      <span>Merch</span>
      {cart.count > 0 && <strong>{cart.count}</strong>}
    </button>
  );
}

export function useCart() {
  const cart = useContext(CartContext);
  if (!cart) throw new Error("useCart must be used inside CartProvider");
  return cart;
}
