import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="mt-14">
    <h2 className="font-heading text-2xl md:text-3xl gold-text-gradient font-semibold tracking-wider mb-4">
      {title}
    </h2>
    <div className="h-px w-16 bg-primary/50 mb-6" />
    <div className="font-body text-base md:text-lg text-foreground/80 space-y-4 text-left">
      {children}
    </div>
  </section>
);

const Visit = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl gold-text-gradient font-semibold tracking-wider mb-6">
            Visit the Vickers
          </h1>
          <div className="h-px w-24 mx-auto bg-primary/50 mb-8" />
          <p className="font-body text-base md:text-lg text-foreground/80 max-w-2xl mx-auto">
            A historic, independent cinema in the heart of Three Oaks, Michigan —
            screening independent, documentary, foreign, and classic films since
            1996.
          </p>

          <Section title="Location & Contact">
            <p>
              <strong>Vickers Theatre</strong>
              <br />
              6 N. Elm Street
              <br />
              Three Oaks, Michigan 49128
            </p>
            <p>
              Showtimes:{" "}
              <a href="tel:+12697563522" className="text-primary hover:underline">
                269-756-3522
              </a>
              <br />
              Email:{" "}
              <a
                href="mailto:info@vickerstheatre.com"
                className="text-primary hover:underline"
              >
                info@vickerstheatre.com
              </a>
            </p>
            <div className="overflow-hidden rounded-lg border border-border mt-4">
              <iframe
                title="Vickers Theatre on Google Maps"
                src="https://www.google.com/maps?q=6+N+Elm+St,+Three+Oaks,+MI+49128&output=embed"
                width="100%"
                height="300"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>
          </Section>

          <Section title="Hours">
            <p>
              Our box office opens 45 minutes prior to the first screening of the day.
              Hours follow the week's showtimes — check{" "}
              <a href="/#now-playing" className="text-primary hover:underline">
                Now Playing
              </a>{" "}
              for the latest schedule.
            </p>
          </Section>

          <Section title="Tickets & Pricing">
            <div className="space-y-2">
              <div className="flex justify-between max-w-sm">
                <span>Adults</span>
                <span className="font-semibold">$12.00</span>
              </div>
              <div className="flex justify-between max-w-sm">
                <span>Students with ID</span>
                <span className="font-semibold">$10.00</span>
              </div>
              <div className="flex justify-between max-w-sm">
                <span>Seniors 60+</span>
                <span className="font-semibold">$10.00</span>
              </div>
              <div className="flex justify-between max-w-sm">
                <span>100+ years old</span>
                <span className="font-semibold">FREE</span>
              </div>
            </div>
            <p className="mt-4">
              Annual Members receive complimentary admission to all regularly
              priced film screenings.
            </p>
            <p>
              Interested in becoming a member?{" "}
              <a
                href="https://easy-ware-forms.com/vickerstheatre/membership"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Become a Member
              </a>{" "}
              to enjoy complimentary admission and support independent cinema in
              Harbor Country.
            </p>
          </Section>

          <Section title="Policies">
            <ul className="list-disc pl-5 space-y-3">
              <li>
                We recommend you arrive 20–30 minutes ahead of the start time for
                popular movies, special events, and especially holiday weekends.
                We show very few trailers, and films begin promptly. Please arrive
                before the listed showtime to allow time for concessions and seating
                before the lights go down. All showtimes are listed in Eastern Time.
              </li>
              <li>
                <strong>NO OUTSIDE FOOD OR BEVERAGE.</strong> We ask that you
                refrain from bringing in outside food or beverage. The success of
                our concession stand is crucial to the continuation of the
                theatre.
              </li>
              <li>
                We also ask you to turn your cell phones off when the lights are
                dim, as a consideration to others. <strong>NO TEXTING IS
                ALLOWED DURING THE FILM.</strong>
              </li>
              <li>
                Film schedule subject to change without notice.
              </li>
            </ul>
            <p className="italic text-foreground/60 mt-4">
              The Vickers Theatre thanks you for your cooperation.
            </p>
          </Section>

          <Section title="Concessions">
            <p>
              Our concessions stand features freshly popped popcorn served with
              real butter, along with a wide selection of nostalgic movie theatre
              candy. We also offer coffee, hot tea, hot chocolate, a variety of soft
              drinks, plus beer and wine.
            </p>
          </Section>

          <Section title="Accessibility">
            <p>
              The Vickers Theatre is handicapped accessible. Our auditorium seats
              up to 126 guests, including café seating and limited private
              balcony seating. Please let us know in advance if we can help make
              your visit more comfortable.
            </p>
          </Section>

          <Section title="Parking">
            <p>
              Free street parking is available along Elm Street and surrounding
              blocks, plus a public lot adjacent to the theatre.
            </p>
          </Section>

          <Section title="Private Events & Group Visits">
            <p>
              Looking to host a private screening, birthday, or corporate event?
              Our historic auditorium and café are available to rent.{" "}
              <a href="/rentals" className="text-primary hover:underline">
                Learn more about Rentals →
              </a>
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Visit;
