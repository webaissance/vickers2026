import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl gold-text-gradient font-semibold tracking-wider mb-6">
            About Vickers Theatre
          </h1>
          <div className="h-px w-24 mx-auto bg-primary/50 mb-8" />
          <div className="font-body text-base md:text-lg text-foreground/80 space-y-6 text-left">
            <p>
              A century of fine cinema in the heart of Three Oaks, Michigan. The Vickers
              Theatre has been a cornerstone of the community since 1926, presenting
              independent, foreign, and classic films in a beautifully preserved
              historic setting.
            </p>
            <p>
              Send us your full About copy and we'll drop it in here, keeping the
              same Art Deco styling.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
