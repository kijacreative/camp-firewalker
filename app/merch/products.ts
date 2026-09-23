export type MerchProduct = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  price: number;
  sizes?: string[];
  source: {
    maker: string;
    model: string;
    color: string;
    decoration: string;
    url: string;
  };
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
    source: {
      maker: "Comfort Colors",
      model: "G6030 Adult Heavyweight Pocket Tee",
      color: "Black",
      decoration: "2.25-inch sand screen print, centered on pocket",
      url: "https://retail.comfortcolors.com/en-us/comfort-colors-6030",
    },
  },
  {
    id: "trail-tee",
    name: "Firewalker Trail Tee",
    category: "Heavyweight cotton",
    description: "A broken-in charcoal tee with the full Camp Firewalker mark in warm cream.",
    image: "/merch/trail-tee.png",
    price: 28,
    sizes: ["S", "M", "L", "XL", "2XL"],
    source: {
      maker: "Comfort Colors",
      model: "G1717 Adult Heavyweight Tee",
      color: "Pepper",
      decoration: "Restrained one-color cream front print",
      url: "https://retail.comfortcolors.com/en-us/comfort-colors-1717",
    },
  },
  {
    id: "field-cap",
    name: "Firewalker Snapback",
    category: "Structured snapback · Mesh back",
    description: "An olive six-panel snapback with a cream phoenix mark, mesh back, and campfire-orange brim stitching.",
    image: "/merch/snapback-cap.png",
    price: 26,
    source: {
      maker: "OTTO CAP",
      model: "141-1070 OTTO SNAP 6 Panel Pro Style Mesh Back Trucker Snapback Hat",
      color: "Olive / Black",
      decoration: "2.25-inch embroidered cream phoenix with orange accent",
      url: "https://ottocap.com/promo-products/wholesale-hats/structure/trucker-hats-mesh-6-panel/fabric-front-mesh-back-trucker-hats.html",
    },
  },
  {
    id: "field-bottle",
    name: "Adventure Bottle",
    category: "Insulated steel · 32 oz",
    description: "A durable cream field bottle made for long days on the water and trail.",
    image: "/merch/field-bottle.png",
    price: 46,
    source: {
      maker: "MiiR Custom",
      model: "32 oz Wide Mouth Bottle",
      color: "Sandstone",
      decoration: "One-color dark wrap print",
      url: "https://b2b.miir.com/products/wide-mouth",
    },
  },
  {
    id: "performance-polo",
    name: "Guide Performance Polo",
    category: "Breathable performance knit",
    description: "A clean cream polo for volunteer leads, events, and sponsor gatherings.",
    image: "/merch/performance-polo.png",
    price: 44,
    sizes: ["S", "M", "L", "XL", "2XL"],
    source: {
      maker: "Sport-Tek",
      model: "ST650 Micropique Sport-Wick Polo",
      color: "White",
      decoration: "2.25-inch embroidered left-chest phoenix",
      url: "https://www.sporttekusa.com/p/3859_Purple",
    },
  },
];

export function formatPrice(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}
