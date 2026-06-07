import { FOOTER, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-lg font-bold text-foreground">{SITE.name}</p>
            <p className="mt-1 text-sm text-muted">{FOOTER.tagline}</p>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted">
            <a href="#product" className="transition-colors hover:text-foreground">
              Product
            </a>
            <a href="#team" className="transition-colors hover:text-foreground">
              Team
            </a>
            <a href="#faq" className="transition-colors hover:text-foreground">
              FAQ
            </a>
            <a href="#waitlist" className="transition-colors hover:text-foreground">
              Waitlist
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted">
          {FOOTER.copyright}
        </div>
      </div>
    </footer>
  );
}
