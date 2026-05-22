import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Rentals = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl gold-text-gradient font-semibold tracking-wider mb-6">
            Theatre Rentals
          </h1>
          <div className="h-px w-24 mx-auto bg-primary/50 mb-8" />
          <div className="font-body text-base md:text-lg text-foreground/80 space-y-6 text-left">
            <p>
              Host your next private screening, corporate event, birthday party, or
              special celebration at the historic Vickers Theatre. Our intimate
              auditorium offers a one-of-a-kind setting for any occasion.
            </p>
            <p>
              Send us your rental details — pricing, capacity, amenities, contact
              info — and we'll add them here.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Rentals;
