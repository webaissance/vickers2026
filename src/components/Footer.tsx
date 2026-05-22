import { Mail, Film, Calendar, CreditCard, Armchair, Star, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const navLinks = [
  { label: "Now Playing", href: "#now-playing", icon: Film },
  { label: "Coming Soon", href: "#coming-soon", icon: Calendar },
  { label: "Become a Member", href: "https://vickerstheatre.com/become-a-member/", icon: CreditCard },
  { label: "Sponsor a Seat", href: "https://vickerstheatre.com/sponsor-a-seat/", icon: Armchair },
  { label: "About", href: "https://vickerstheatre.com/about/", icon: Star },
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
