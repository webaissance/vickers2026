import { useState } from "react";
import { Menu, X } from "lucide-react";
import vickersLogo from "@/assets/vickers-logo.png";

const leftLinks = [
  { label: "Now Playing", href: "#now-playing" },
  { label: "Coming Soon", href: "#coming-soon" },
  { label: "Become a Member", href: "https://vickerstheatre.com/become-a-member/" },
];

const rightLinks = [
  { label: "Sponsor a Seat", href: "https://vickerstheatre.com/sponsor-a-seat/" },
  { label: "About", href: "https://vickerstheatre.com/about/" },
  { label: "Gift Cards", href: "https://easy-ware-forms.com/vickerstheatre/giftcard" },
];

const allLinks = [...leftLinks, ...rightLinks];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex items-center px-4 py-4 md:py-5">
        {/* Left nav */}
        <nav className="hidden lg:flex items-center gap-6 flex-1 justify-end pr-8">
          {leftLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-base font-body font-medium tracking-wide text-foreground/80 hover:text-primary transition-colors duration-200 uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Centered Logo */}
        <a href="/" className="flex-shrink-0 flex items-center justify-center px-4">
          <img src={vickersLogo} alt="Vickers Theatre" className="h-14 md:h-20 w-auto max-w-[200px] md:max-w-[280px] object-contain" />
        </a>

        {/* Right nav */}
        <nav className="hidden lg:flex items-center gap-6 flex-1 pl-8">
          {rightLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-base font-body font-medium tracking-wide text-foreground/80 hover:text-primary transition-colors duration-200 uppercase"
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
          {allLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-base font-body font-medium tracking-wide text-foreground/80 hover:text-primary transition-colors uppercase border-b border-border/50 last:border-0"
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
