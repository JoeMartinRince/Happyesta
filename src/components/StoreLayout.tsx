import { Link } from "@tanstack/react-router";
import { Home, Search, LayoutGrid, ShoppingCart, User, Menu } from "lucide-react";
import type { ReactNode } from "react";
import { HapyeztaLogo } from "./HapyeztaLogo";

export function StoreLayout({ children, cartCount = 0 }: { children: ReactNode; cartCount?: number }) {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Announcement bar */}
      <div className="bg-blush text-primary text-center text-[11px] sm:text-xs px-3 py-2 font-semibold tracking-wide border-b border-blush-strong/20">
        Free Shipping Above ₹1,999 &nbsp;|&nbsp; FLAT 3% OFF FIRST ORDER &nbsp;|&nbsp; USE CODE - FIRST3
      </div>

      {/* Header */}
      <header className="sticky top-0 z-30 bg-background/95 backdrop-blur border-b border-border">
        <div className="flex items-center justify-between px-4 py-3 max-w-md mx-auto">
          <button aria-label="Menu" className="text-primary p-1">
            <Menu className="w-6 h-6" />
          </button>
          
          <Link to="/" className="flex items-center">
            <HapyeztaLogo emblemSize={28} wordmarkHeight={12} />
          </Link>
          
          <div className="flex items-center gap-3">
            <Link to="/search" aria-label="Search" className="text-primary">
              <Search className="w-6 h-6" />
            </Link>
            <Link to="/cart" aria-label="Cart" className="relative text-primary">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1.5 -right-2 bg-primary text-primary-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto">{children}</main>

      {/* Bottom nav */}
      <nav className="fixed bottom-0 inset-x-0 z-30 bg-background border-t border-border">
        <div className="max-w-md mx-auto grid grid-cols-5 text-[11px] font-semibold text-muted-foreground">
          <BottomLink to="/" icon={<Home className="w-5 h-5" />} label="Home" />
          <BottomLink to="/search" icon={<Search className="w-5 h-5" />} label="Search" />
          <BottomLink to="/shop" icon={<LayoutGrid className="w-5 h-5" />} label="Shop" />
          <BottomLink to="/cart" icon={<ShoppingCart className="w-5 h-5" />} label="cart" badge={cartCount} />
          <BottomLink to="/signin" icon={<User className="w-5 h-5" />} label="account" />
        </div>
      </nav>
    </div>
  );
}

function BottomLink({ to, icon, label, badge }: { to: string; icon: ReactNode; label: string; badge?: number }) {
  return (
    <Link
      to={to}
      activeProps={{ className: "text-primary" }}
      className="flex flex-col items-center justify-center gap-1 py-2.5 relative"
    >
      <span className="relative">
        {icon}
        {badge !== undefined && (
          <span className="absolute -top-1.5 -right-2 bg-primary text-primary-foreground text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
            {badge}
          </span>
        )}
      </span>
      <span>{label}</span>
    </Link>
  );
}
