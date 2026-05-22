import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Rentals = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl gold-text-gradient font-semibold tracking-wider mb-6 text-center">
            Host Your Event at the Vickers Theatre
          </h1>
          <div className="h-px w-24 mx-auto bg-primary/50 mb-8" />

          <div className="font-body text-base md:text-lg text-foreground/80 space-y-6 text-left">
            <p>
              Looking for a space your guests will actually remember? The historic
              Vickers Theatre offers a one-of-a-kind setting with over a century of
              character.
            </p>

            <p>
              Our 108-seat auditorium, along with additional café seating, is ideal
              for private screenings, corporate gatherings, birthday parties,
              lectures, and community events. A 22-foot screen and immersive
              surround sound create a true cinematic experience.
            </p>

            <h2 className="font-heading text-2xl gold-text-gradient font-semibold tracking-wider mt-10 mb-4">
              Private Rental Rates
            </h2>
            <div className="space-y-2 text-foreground/80">
              <p>
                <strong>Monday–Wednesday (before 6pm):</strong> $450
              </p>
              <p>
                <strong>Monday–Wednesday (6pm and later):</strong> $600
              </p>
              <p>
                <strong>Thursday–Sunday (before 6pm):</strong> $800
              </p>
              <p>
                <strong>Thursday–Sunday (6pm and later):</strong> $1,200
              </p>
            </div>

            <p>
              Rental pricing reflects up to three hours of use. Events scheduled
              before 6pm must conclude by 6pm, and all rentals must conclude by 9pm.
            </p>

            <p>
              Your rental includes full use of the auditorium and projection system.
              You are welcome to provide your own content, or our team can assist
              with coordinating a film booking; please note that film bookings may
              incur additional licensing costs.
            </p>

            <p>
              Our concessions stand will be open for your event, with flexible
              options for your guests. Outside catering is welcome. Outside alcohol
              is not permitted; however, beer and wine are available for purchase
              on-site.
            </p>

            <p>
              For groups interested in sharing a film with a broader audience, we
              also offer the opportunity to partner with us on special community
              screenings or fundraisers. In these cases, a ticketed event with a
              revenue split may be a more effective and engaging alternative to a
              private rental.
            </p>

            <p>
              Evening rentals are subject to availability based on scheduled film
              programming.
            </p>

            <p className="pt-4">
              To inquire about availability or begin planning your event, please
              contact us at{" "}
              <a
                href="mailto:info@vickerstheatre.com"
                className="text-primary hover:underline"
              >
                info@vickerstheatre.com
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Rentals;
