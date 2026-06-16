import { createFileRoute, Link } from "@tanstack/react-router";

import { StoreLayout } from "@/components/StoreLayout";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your shopping cart — HAPYEZTA" },
      { name: "description", content: "Review the items in your HAPYEZTA cart and proceed to checkout." },
    ],
  }),
  component: Cart,
});

function Cart() {
  return (
    <StoreLayout>
      <div className="px-6 pt-8">
        <h1 className="text-primary text-xl font-bold font-display">Your Shopping Cart</h1>
        <div className="mt-24 text-center">
          <p className="text-primary text-2xl font-bold font-display">Your cart is empty</p>
          <Link to="/shop" className="mt-6 inline-block bg-primary text-primary-foreground rounded-md px-6 py-3 font-bold shadow-md hover:scale-[1.02] active:scale-95 transition-all">
            Return to shop
          </Link>
        </div>
        <footer className="mt-16 bg-blush -mx-6 px-6 py-8 border-t border-blush-strong/10">
          <details className="border-b border-blush-strong py-3">
            <summary className="flex justify-between items-center text-primary font-bold cursor-pointer list-none font-display">
              Let’s stay linked! <span className="text-xl">+</span>
            </summary>
          </details>
          <details className="py-3">
            <summary className="flex justify-between items-center text-primary font-bold cursor-pointer list-none font-display">
              Quick Links <span className="text-xl">+</span>
            </summary>
          </details>
          <p className="text-center text-xs text-primary pt-6">
            © 2026, HAPYEZTA | All rights reserved
          </p>
        </footer>
      </div>
    </StoreLayout>
  );
}