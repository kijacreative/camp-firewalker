"use client";

import { ExternalLink, Plus } from "lucide-react";
import { useState } from "react";
import { useCart } from "../CartProvider";
import { formatPrice, merchProducts } from "./products";

export default function MerchStore() {
  const { addItem } = useCart();
  const [sizes, setSizes] = useState<Record<string, string>>(
    Object.fromEntries(merchProducts.map((product) => [product.id, product.sizes?.[1] ?? ""])),
  );

  return (
    <section className="merch-grid" aria-label="Camp Firewalker merchandise">
      {merchProducts.map((product, index) => (
        <article className={`merch-product merch-product-${index + 1}`} key={product.id}>
          <div className="merch-product-image">
            <img src={product.image} alt={product.name} />
            <span>{String(index + 1).padStart(2, "0")}</span>
          </div>
          <div className="merch-product-copy">
            <p>{product.category}</p>
            <div className="merch-product-title">
              <h2>{product.name}</h2>
              <strong>{formatPrice(product.price)}</strong>
            </div>
            <p className="merch-product-description">{product.description}</p>
            <div className="merch-source">
              <span>Production source selected</span>
              <a href={product.source.url} target="_blank" rel="noreferrer">
                {product.source.maker} {product.source.model}
                <ExternalLink aria-hidden="true" />
              </a>
              <p>{product.source.color} / {product.source.decoration}</p>
            </div>
            <div className="merch-product-actions">
              {product.sizes ? (
                <label>
                  <span>Size</span>
                  <select value={sizes[product.id]} onChange={(event) => setSizes((current) => ({ ...current, [product.id]: event.target.value }))}>
                    {product.sizes.map((size) => <option value={size} key={size}>{size}</option>)}
                  </select>
                </label>
              ) : <span className="merch-standard-size">One size</span>}
              <button type="button" onClick={() => addItem(product, sizes[product.id] || undefined)}>
                <Plus aria-hidden="true" />
                Add to basket
              </button>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
