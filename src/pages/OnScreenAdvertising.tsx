import Header from "@/components/Header";
import Footer from "@/components/Footer";

const OnScreenAdvertising = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl gold-text-gradient font-semibold tracking-wider mb-6">
            On-Screen Advertising at the Vickers Theatre
          </h1>
          <div className="h-px w-24 mx-auto bg-primary/50 mb-8" />

          <div className="font-body text-base md:text-lg text-foreground/80 space-y-6 text-left">
            <p className="text-xl text-foreground/90">
              See your message on the big screen.
            </p>

            <p>
              At the Vickers Theatre, your message appears before every film—shared
              with a loyal, attentive audience of Harbor Country locals and visitors
              in a truly one-of-a-kind setting.
            </p>

            <p>
              Whether you are promoting a business, celebrating a milestone, or
              spreading the word about a community event, our on-screen placements
              offer a memorable and meaningful way to be seen.
            </p>

            <p>
              Because we intentionally limit the number of spots, availability is
              limited and fills quickly.
            </p>

            <h2 className="font-heading text-2xl gold-text-gradient font-semibold tracking-wider mt-10 mb-4">
              What You Can Share
            </h2>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Local businesses and services</li>
              <li>Events, fundraisers, and community initiatives</li>
              <li>Birthdays, anniversaries, and personal messages</li>
              <li>Real estate listings or special announcements</li>
            </ul>

            <h2 className="font-heading text-2xl gold-text-gradient font-semibold tracking-wider mt-10 mb-4">
              Program Details
            </h2>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Your image appears before every regularly scheduled film</li>
              <li>Reaches thousands of patrons throughout the year</li>
              <li>Static image format (simple and effective)</li>
              <li>A seated, engaged audience that is actually watching</li>
            </ul>

            <h2 className="font-heading text-2xl gold-text-gradient font-semibold tracking-wider mt-10 mb-4">
              Simple, Affordable Pricing
            </h2>
            <div className="space-y-2 text-foreground/80">
              <p>
                <strong>$50</strong> per month
              </p>
              <p>
                <strong>$500</strong> per year (best value)
              </p>
            </div>
            <p>
              Annual placements can be updated at any time—perfect for seasonal
              promotions, event reminders, or changing messages throughout the year
              at no additional cost.
            </p>

            <h2 className="font-heading text-2xl gold-text-gradient font-semibold tracking-wider mt-10 mb-4">
              Getting Started is Easy
            </h2>
            <ol className="list-decimal list-inside space-y-1 ml-2">
              <li>Choose your start date</li>
              <li>
                Send your artwork to{" "}
                <a
                  href="mailto:info@vickerstheatre.com"
                  className="text-primary hover:underline"
                >
                  info@vickerstheatre.com
                </a>
              </li>
              <li>We’ll confirm your placement and send a payment link</li>
            </ol>
            <p>We also accept cash or check if preferred.</p>

            <h2 className="font-heading text-2xl gold-text-gradient font-semibold tracking-wider mt-10 mb-4">
              Artwork Guidelines
            </h2>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>1280 x 720 pixels</li>
              <li>.jpg format</li>
              <li>Submit at least one week prior to your requested start date</li>
            </ul>

            <h2 className="font-heading text-2xl gold-text-gradient font-semibold tracking-wider mt-10 mb-4">
              Reserve Your Spot
            </h2>
            <p>
              Interested in sharing your message on the big screen? Email{" "}
              <a
                href="mailto:info@vickerstheatre.com"
                className="text-primary hover:underline"
              >
                info@vickerstheatre.com
              </a>{" "}
              to check availability.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OnScreenAdvertising;
