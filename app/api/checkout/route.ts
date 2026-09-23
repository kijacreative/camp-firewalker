import { NextRequest, NextResponse } from "next/server";
import { merchProducts } from "../../merch/products";

type CheckoutItem = {
  productId: string;
  size?: string;
  quantity: number;
};

export async function POST(request: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json(
      { error: "Secure checkout is awaiting the Camp Firewalker Stripe connection. Please use the email order option for now." },
      { status: 503 },
    );
  }

  let body: { items?: CheckoutItem[] };
  try {
    body = await request.json() as { items?: CheckoutItem[] };
  } catch {
    return NextResponse.json({ error: "The basket could not be read." }, { status: 400 });
  }

  if (!Array.isArray(body.items) || body.items.length === 0 || body.items.length > 20) {
    return NextResponse.json({ error: "The basket is empty or invalid." }, { status: 400 });
  }

  const selected = body.items.flatMap((item) => {
    const product = merchProducts.find((candidate) => candidate.id === item.productId);
    const quantity = Number.isInteger(item.quantity) ? Math.min(Math.max(item.quantity, 1), 10) : 0;
    const size = typeof item.size === "string" && product?.sizes?.includes(item.size) ? item.size : undefined;
    return product && quantity > 0 ? [{ product, quantity, size }] : [];
  });

  if (selected.length !== body.items.length) {
    return NextResponse.json({ error: "One or more basket items are no longer available." }, { status: 400 });
  }

  const origin = process.env.NEXT_PUBLIC_SITE_URL || request.nextUrl.origin;
  const params = new URLSearchParams({
    mode: "payment",
    success_url: `${origin}/merch?checkout=success&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/merch?checkout=cancelled`,
    "shipping_address_collection[allowed_countries][0]": "US",
    "phone_number_collection[enabled]": "true",
    billing_address_collection: "auto",
    allow_promotion_codes: "true",
  });

  selected.forEach(({ product, quantity, size }, index) => {
    const label = size ? `${product.name} / ${size}` : product.name;
    params.set(`line_items[${index}][price_data][currency]`, "usd");
    params.set(`line_items[${index}][price_data][unit_amount]`, String(product.price * 100));
    params.set(`line_items[${index}][price_data][product_data][name]`, label);
    params.set(`line_items[${index}][price_data][product_data][description]`, `${product.source.maker} ${product.source.model}`);
    params.set(`line_items[${index}][quantity]`, String(quantity));
  });

  const stripeResponse = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${secretKey}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  });

  if (!stripeResponse.ok) {
    return NextResponse.json({ error: "Stripe checkout is temporarily unavailable. Please try again or request the order by email." }, { status: 502 });
  }

  const session = await stripeResponse.json() as { url?: string };
  if (!session.url) {
    return NextResponse.json({ error: "Stripe did not return a checkout link." }, { status: 502 });
  }

  return NextResponse.json({ url: session.url });
}
