import { useState } from "react";
import { Menu, X, Film, Calendar, CreditCard, Armchair, Star, Gift } from "lucide-react";
import vickersLogo from "@/assets/vickers-logo.png";

const leftLinks = [
  { label: "Now Playing", href: "#now-playing", icon: Film },
  { label: "Coming Soon", href: "#coming-soon", icon: Calendar },
  { label: "Become a Member", href: "https://easy-ware-forms.com/vickerstheatre/membership", icon: CreditCard },
];

const rightLinks = [
  { label: "Sponsor a Seat", href: "https://easy-ware-forms.com/vickerstheatre/seatsponsor", icon: Armchair },
  { label: "About", href: "https://vickerstheatre.com/about/", icon: Star },
  { label: "Gift Cards", href: "https://easy-ware-forms.com/vickerstheatre/giftcard", icon: Gift },
];

const allLinks = [...leftLinks, ...rightLinks];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4 py-4 md:py-5">
        {/* Desktop: 3-column grid for perfect centering */}
        <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center gap-4">
          {/* Left nav */}
          <nav className="flex items-end justify-end gap-6">
            {leftLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex flex-col items-center gap-1.5 text-base font-body font-medium tracking-wide text-foreground/80 hover:text-primary transition-colors duration-200 uppercase whitespace-nowrap"
                >
                  <Icon size={20} className="text-primary group-hover:text-primary transition-colors" strokeWidth={1.75} />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Centered Logo */}
          <a href="/" className="flex items-center justify-center px-4">
            <img src={vickersLogo} alt="Vickers Theatre" className="h-20 w-auto" />
          </a>

          {/* Right nav */}
          <nav className="flex items-end gap-6">
            {rightLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex flex-col items-center gap-1.5 text-base font-body font-medium tracking-wide text-foreground/80 hover:text-primary transition-colors duration-200 uppercase whitespace-nowrap"
                >
                  <Icon size={20} className="text-primary group-hover:text-primary transition-colors" strokeWidth={1.75} />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Mobile: logo + hamburger */}
        <div className="flex lg:hidden items-center justify-between">
          <a href="/" className="flex items-center">
            <img src={vickersLogo} alt="Vickers Theatre" className="h-14 w-auto" />
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-border bg-background px-4 pb-6 pt-2">
          {allLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 py-3 text-base font-body font-medium tracking-wide text-foreground/80 hover:text-primary transition-colors uppercase border-b border-border/50 last:border-0"
              >
                <Icon size={18} className="text-primary" strokeWidth={1.75} />
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>
      )}
    </header>
  );
};

export default Header;
