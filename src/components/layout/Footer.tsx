import { FOOTER } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <Logo />
            <p className="mt-2 text-xs text-muted">{FOOTER.tagline}</p>
          </div>
          <div className="flex items-center gap-6 text-xs tracking-wide text-muted">
            <a
              href="#product"
              className="transition-colors hover:text-foreground"
            >
              Product
            </a>
            <a
              href="#team"
              className="transition-colors hover:text-foreground"
            >
              Team
            </a>
            <a href="#faq" className="transition-colors hover:text-foreground">
              FAQ
            </a>
            <a
              href="#waitlist"
              className="transition-colors hover:text-foreground"
            >
              Waitlist
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-xs text-muted">
          {FOOTER.copyright}
        </div>
      </div>
    </footer>
  );
}
