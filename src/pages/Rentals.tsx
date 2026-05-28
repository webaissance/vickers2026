import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RentalInquiryForm from "@/components/RentalInquiryForm";

const Rentals = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl gold-text-gradient font-semibold tracking-wider mb-6">
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

            <h2 className="font-heading text-3xl gold-text-gradient font-semibold tracking-wider mt-12 mb-2 text-center">
              Private Rental Inquiry Form
            </h2>
            <div className="h-px w-16 mx-auto bg-primary/50 mb-6" />
            <RentalInquiryForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Rentals;
