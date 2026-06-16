import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { HapyeztaLogo } from "@/components/HapyeztaLogo";

export const Route = createFileRoute("/signin")({
  head: () => ({
    meta: [
      { title: "Sign in — HAPYEZTA" },
      { name: "description", content: "Sign in to your HAPYEZTA account or create a new one to start shopping." },
    ],
  }),
  component: SignIn,
});

function SignIn() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="pt-10 flex justify-center px-4">
        <HapyeztaLogo orientation="horizontal" emblemSize={36} wordmarkHeight={16} />
      </div>

      <div className="flex-1 max-w-md w-full mx-auto px-6 pt-20">
        <h1 className="text-2xl font-bold text-foreground font-display">Sign in</h1>
        <p className="text-sm text-muted-foreground mt-1 font-semibold">Sign in or create an account</p>

        <button className="mt-6 w-full bg-[#7f58a5] text-white rounded-md py-3.5 font-bold shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all">
          Continue with shop
        </button>

        <div className="flex items-center gap-3 my-5 text-muted-foreground text-sm font-semibold">
          <div className="h-px flex-1 bg-border" /> or <div className="h-px flex-1 bg-border" />
        </div>

        <form className="relative" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Email"
            className="w-full border-2 border-primary rounded-md px-4 py-3 outline-none placeholder:text-muted-foreground font-medium"
          />
          <button type="submit" aria-label="Continue" className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground p-1 hover:text-primary transition-colors">
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <label className="mt-4 flex items-center gap-2 text-sm text-foreground font-semibold cursor-pointer">
          <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary rounded cursor-pointer" />
          Email me with news and offers
        </label>

        <p className="mt-4 text-center text-xs text-muted-foreground font-medium">
          By continuing, you agree to our <span className="underline hover:text-primary cursor-pointer">Terms of service</span>
        </p>
      </div>

      <p className="text-center text-primary font-bold py-6 hover:underline cursor-pointer">Privacy policy</p>
    </div>
  );
}