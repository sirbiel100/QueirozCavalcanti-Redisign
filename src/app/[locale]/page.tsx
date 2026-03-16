import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Areas from "@/components/Areas";
import News from "@/components/News";
import Articles from "@/components/Articles";
import Careers from "@/components/Careers";
import People from "@/components/People";
import Podcast from "@/components/Podcast";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Areas />
      <News />
      <Articles />
      <Careers />
      <People />
      <Podcast />
      <Footer />
    </main>
  );
}
