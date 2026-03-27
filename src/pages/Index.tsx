import Header from "@/components/Header";
import NowPlaying from "@/components/NowPlaying";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <NowPlaying />
      <ComingSoon />
      <Footer />
    </div>
  );
};

export default Index;
