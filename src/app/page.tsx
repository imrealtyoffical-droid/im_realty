import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Footer from "@/components/layout/Footer";
import FirstHomeVideo from "@/components/home/FirstHomeVideo";

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-primary-red selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <FirstHomeVideo />
      <WhyChooseUs />
      <Footer />
    </main>
  );
}
