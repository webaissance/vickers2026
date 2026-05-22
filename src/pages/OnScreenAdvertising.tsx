import Header from "@/components/Header";
import Footer from "@/components/Footer";

const OnScreenAdvertising = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl gold-text-gradient font-semibold tracking-wider mb-6">
            On-Screen Advertising
          </h1>
          <div className="h-px w-24 mx-auto bg-primary/50 mb-8" />
          <div className="font-body text-base md:text-lg text-foreground/80 space-y-6 text-left">
            <p>
              Reach an engaged, captive audience of film lovers from across Southwest
              Michigan and Northern Indiana. On-screen advertisements at the Vickers
              Theatre put your business in front of every patron, every show.
            </p>
            <p>
              Send us your advertising packages, pricing, and specs and we'll add
              them here.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OnScreenAdvertising;
