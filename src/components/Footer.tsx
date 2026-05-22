import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-md mx-auto pb-8 mb-8 border-b border-border/50">
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

        <p className="font-heading text-lg gold-text-gradient font-semibold tracking-wider mb-2">
          VICKERS THEATRE
        </p>
        <p className="text-muted-foreground font-body text-sm mb-1">
          6 N. Elm Street · Three Oaks, Michigan 49128
        </p>
        <p className="text-muted-foreground font-body text-xs tracking-wide">
          {"\u200B"}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
