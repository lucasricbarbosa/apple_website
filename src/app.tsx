import { Features } from "./components/features";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { Highlights } from "./components/highlights";
import { HowItWorks } from "./components/howItWorks";
import { Model } from "./components/model";
import { Navbar } from "./components/navbar";

export const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
};
