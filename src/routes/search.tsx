import { createFileRoute, Link } from "@tanstack/react-router";
import { Search as SearchIcon, X, ChevronDown } from "lucide-react";
import { useState } from "react";

import { StoreLayout } from "@/components/StoreLayout";
import { products, popularSearches } from "@/lib/products";

export const Route = createFileRoute("/search")({
  head: () => ({
    meta: [
      { title: "Search — HAPYEZTA" },
      { name: "description", content: "Search the HAPYEZTA creative store. Popular searches and most-searched products." },
    ],
  }),
  component: SearchPage,
});

function SearchPage() {
  const [q, setQ] = useState("");
  const list = products.slice(0, 6);
  return (
    <StoreLayout>
      <div className="px-4 pt-5">
        <div className="flex items-center gap-2">
          <button className="flex-1 flex items-center justify-between bg-background border border-blush-strong text-primary rounded-full px-4 py-2.5 text-sm font-semibold">
            All product types <ChevronDown className="w-4 h-4 text-primary" />
          </button>
          <Link to="/" aria-label="Close" className="text-primary p-1"><X className="w-5 h-5" /></Link>
        </div>

        <div className="mt-6 flex items-center gap-3 border-b border-primary pb-2">
          <SearchIcon className="w-5 h-5 text-primary" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search our store"
            className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground text-foreground font-medium"
          />
        </div>

        <h2 className="text-primary font-bold mt-6 font-display">Popular searches:</h2>
        <div className="flex flex-wrap gap-3 mt-2 text-muted-foreground text-sm font-semibold">
          {popularSearches.map((s) => (
            <button key={s} onClick={() => setQ(s)} className="hover:text-primary transition-colors">{s}</button>
          ))}
        </div>

        <h2 className="text-primary font-bold mt-6 font-display">Most searched products:</h2>
        <ul className="mt-2 divide-y divide-blush-strong/40">
          {list.map((p) => (
            <li key={p.id} className="flex items-center gap-3 py-3">
              <img src={p.image} alt={p.name} loading="lazy" width={120} height={120} className="w-16 h-16 rounded-lg object-cover bg-blush border border-blush-strong/10" />
              <div>
                <p className="text-primary font-bold text-sm">{p.name}</p>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-muted-foreground line-through text-xs">Rs. {p.oldPrice}.00</span>
                  <span className="text-primary font-bold text-sm">Rs. {p.price}.00</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </StoreLayout>
  );
}