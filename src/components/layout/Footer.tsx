import { FOOTER } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="bg-navy">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <Logo light />
            <p className="mt-2 text-xs text-background/50">{FOOTER.tagline}</p>
          </div>
          <div className="flex items-center gap-6 text-xs tracking-wide text-background/50">
            <a
              href="#product"
              className="transition-colors hover:text-background"
            >
              Product
            </a>
            <a
              href="#team"
              className="transition-colors hover:text-background"
            >
              Team
            </a>
            <a href="#faq" className="transition-colors hover:text-background">
              FAQ
            </a>
            <a
              href="#waitlist"
              className="transition-colors hover:text-background"
            >
              Waitlist
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-background/10 pt-8 text-center text-xs text-background/40">
          {FOOTER.copyright}
        </div>
      </div>
    </footer>
  );
}
