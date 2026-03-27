import { useState } from "react";
import { Menu, X } from "lucide-react";
import vickersLogo from "@/assets/vickers-logo.png";

const navLinks = [
  { label: "Now Playing", href: "#now-playing" },
  { label: "Coming Soon", href: "#coming-soon" },
  { label: "Become a Member", href: "https://vickerstheatre.com/become-a-member/" },
  { label: "Sponsor a Seat", href: "https://vickerstheatre.com/sponsor-a-seat/" },
  { label: "About Us", href: "https://vickerstheatre.com/about/" },
  { label: "Gift Cards", href: "https://easy-ware-forms.com/vickerstheatre/giftcard" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:py-5">
        {/* Logo */}
        <a href="/" className="flex flex-col items-center gap-0 leading-none">
          <span className="font-heading text-2xl md:text-3xl font-bold tracking-[0.25em] gold-text-gradient">
            VICKERS
          </span>
          <span className="text-[10px] md:text-xs tracking-[0.35em] uppercase text-muted-foreground font-body">
            Theatre &amp; Cinema
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-body font-medium tracking-wide text-foreground/80 hover:text-primary transition-colors duration-200 uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-border bg-background px-4 pb-6 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-body font-medium tracking-wide text-foreground/80 hover:text-primary transition-colors uppercase border-b border-border/50 last:border-0"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
