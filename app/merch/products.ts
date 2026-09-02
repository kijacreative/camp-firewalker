export type MerchProduct = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  price: number;
  sizes?: string[];
};

export const merchProducts: MerchProduct[] = [
  {
    id: "pocket-field-tee",
    name: "Heavyweight Pocket Tee",
    category: "Heavyweight cotton · Breast pocket",
    description: "A true black substantial-weight tee with the complete sand logo lockup placed directly on the breast pocket.",
    image: "/merch/pocket-field-tee.png",
    price: 34,
    sizes: ["S", "M", "L", "XL", "2XL"],
  },
  {
    id: "trail-tee",
    name: "Firewalker Trail Tee",
    category: "Heavyweight cotton",
    description: "A broken-in charcoal tee with the full Camp Firewalker mark in warm cream.",
    image: "/merch/trail-tee.png",
    price: 28,
    sizes: ["S", "M", "L", "XL", "2XL"],
  },
  {
    id: "field-cap",
    name: "Texas Field Cap",
    category: "Five-panel canvas",
    description: "An olive trail cap with a tonal phoenix patch and campfire-orange stitching.",
    image: "/merch/field-cap.png",
    price: 26,
  },
  {
    id: "field-bottle",
    name: "Adventure Bottle",
    category: "Insulated steel · 32 oz",
    description: "A durable cream field bottle made for long days on the water and trail.",
    image: "/merch/field-bottle.png",
    price: 24,
  },
  {
    id: "performance-polo",
    name: "Guide Performance Polo",
    category: "Breathable performance knit",
    description: "A clean cream polo for volunteer leads, events, and sponsor gatherings.",
    image: "/merch/performance-polo.png",
    price: 42,
    sizes: ["S", "M", "L", "XL", "2XL"],
  },
];

export function formatPrice(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}
