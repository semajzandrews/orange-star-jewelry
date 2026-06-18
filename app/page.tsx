import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Bench from "./components/Bench";
import Work from "./components/Work";
import Services from "./components/Services";
import Proof from "./components/Proof";
import Visit from "./components/Visit";
import Footer from "./components/Footer";
import CallPill from "./components/CallPill";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Bench />
      <Work />
      <Services />
      <Proof />
      <Visit />
      <Footer />
      <CallPill />
    </main>
  );
}
