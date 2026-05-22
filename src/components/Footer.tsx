import { Mail, Film, Calendar, CreditCard, Armchair, Star, Gift, Building, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const navLinks = [
  { label: "Now Playing", href: "#now-playing", icon: Film },
  { label: "Coming Soon", href: "#coming-soon", icon: Calendar },
  { label: "About", href: "/about", icon: Star },
  { label: "Rentals", href: "/rentals", icon: Building },
  { label: "On-Screen Advertising", href: "/on-screen-advertising", icon: Monitor },
  { label: "Become a Member", href: "https://easy-ware-forms.com/vickerstheatre/membership", icon: CreditCard },
  { label: "Sponsor a Seat", href: "https://easy-ware-forms.com/vickerstheatre/seatsponsor", icon: Armchair },
  { label: "Gift Cards", href: "https://easy-ware-forms.com/vickerstheatre/giftcard", icon: Gift },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Left: Address & Contact */}
          <div className="text-left font-body text-sm space-y-1">
            <p className="font-heading text-lg gold-text-gradient font-semibold tracking-wider mb-2">
              Vickers Theatre
            </p>
            <p className="text-muted-foreground">6 N. Elm Street</p>
            <p className="text-muted-foreground">Three Oaks, Michigan 49128</p>
            <p className="text-muted-foreground pt-2">
              Showtimes:{" "}
              <a href="tel:+12697563522" className="text-primary hover:underline">
                269-756-3522
              </a>
            </p>
            <p>
              <a href="mailto:info@vickerstheatre.com" className="text-primary hover:underline">
                info@vickerstheatre.com
              </a>
            </p>
          </div>

          {/* Center: Newsletter */}
          <div className="max-w-md mx-auto w-full text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Mail size={18} className="text-primary" strokeWidth={1.75} />
              <h2 className="font-heading text-base gold-text-gradient font-semibold tracking-wider uppercase">
                Weekly Newsletter
              </h2>
            </div>
            <p className="text-muted-foreground font-body text-xs mb-4">
              Get showtimes and special events delivered to your inbox.
            </p>
            <form
              action="https://visitor.r20.constantcontact.com/d.jsp"
              method="post"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col sm:flex-row gap-2"
            >
              <input
                type="hidden"
                name="v"
                value="001r_jNiEsXMVkV-Ak1TjBVcXmuX7CTWQgzeWLXydCLfeBm3HBFGGFvNy3-kU1GeEUAxXJWhLJdWIf7uV4jRvrN1g=="
              />
              <input type="hidden" name="m" value="signup" />
              <input type="hidden" name="p" value="oi" />
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <Input
                id="newsletter-email"
                type="email"
                name="ea"
                required
                placeholder="your@email.com"
                className="flex-1"
              />
              <Button type="submit" variant="default" className="gold-gradient text-primary-foreground font-semibold tracking-wide">
                Subscribe
              </Button>
            </form>
            <p className="text-muted-foreground/70 font-body text-[10px] mt-3">
              By submitting, you agree to receive emails from Vickers Theatre. You may unsubscribe at any time.
            </p>

            {/* Social Media */}
            <div className="mt-5 flex items-center justify-center gap-5">
              <a
                href="https://www.facebook.com/TheVickersTheatre"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Vickers Theatre on Facebook"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/vickerstheatrethreeoaks/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Vickers Theatre on Instagram"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                <InstagramIcon className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right: Navigation */}
          <nav className="flex flex-col gap-2 md:items-end">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm font-body font-medium tracking-wide text-foreground/80 hover:text-primary transition-colors uppercase"
                >
                  <Icon size={16} className="text-primary" strokeWidth={1.75} />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
