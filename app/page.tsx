import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Bench from "./components/Bench";
import Collection from "./components/Collection";
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
      <Marquee />
      <Bench />
      <Collection />
      <Services />
      <Proof />
      <Visit />
      <Footer />
      <CallPill />
    </main>
  );
}
