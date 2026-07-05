import Navbar from "@/components/layout/Navbar";
import AboutContent from "@/components/about/AboutContent";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f9f8f3]">
      <Navbar />
      <AboutContent />
      <Footer />
    </main>
  );
}
