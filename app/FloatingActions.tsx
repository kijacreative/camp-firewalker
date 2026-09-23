"use client";

import Link from "next/link";
import { Heart, Users } from "lucide-react";
import { usePathname } from "next/navigation";
import { MerchBasketButton } from "./CartProvider";

export default function FloatingActions() {
  const pathname = usePathname();

  return (
    <div className="nav-actions" aria-label="Quick actions">
      <Link
        className="floating-action-button floating-action-volunteer"
        href="/volunteer#volunteer-interest"
        aria-current={pathname === "/volunteer" ? "page" : undefined}
        title="Volunteer"
      >
        <Users aria-hidden="true" />
        <span>Volunteer</span>
      </Link>
      <Link
        className="floating-action-button floating-action-donate"
        href="/donate#donate-interest"
        aria-current={pathname === "/donate" ? "page" : undefined}
        title="Donate"
      >
        <Heart aria-hidden="true" />
        <span>Donate</span>
      </Link>
      <MerchBasketButton />
    </div>
  );
}
