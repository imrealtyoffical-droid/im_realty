import Navbar from "@/components/layout/Navbar";
import Projects from "@/components/home/Projects";
import CommercialProject from "@/components/home/CommercialProject";
import Footer from "@/components/layout/Footer";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#f9f8f3] text-[#1c1c1c] font-serif overflow-x-hidden">
      <Navbar />
      
      {/* Page Hero */}
      <div className="pt-32 md:pt-40 pb-20 px-6 md:px-24">
        <div className="max-w-7xl mx-auto border-l border-[#0b3d2c] pl-6 md:pl-12">
          <p className="text-[#0b3d2c] text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase mb-6">Archive / 01</p>
          <h1 className="text-4xl md:text-9xl font-bold uppercase tracking-tighter leading-none text-[#1c1c1c]">
            The <br /> Collection
          </h1>
        </div>
      </div>

      <Projects />
      <CommercialProject />

      {/* Additional Page Content: Process */}
      <div className="bg-[#f1efe7] py-32 px-6 md:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-serif text-[#0b3d2c] uppercase tracking-tight mb-8">Structural Integrity <br /> & Artistic Purity</h2>
            <p className="text-gray-600 text-sm leading-loose">
              Every project in our collection undergoes a rigorous selection process. We analyze geological stability, local architectural heritage, and future sustainability before a single sketch is made. 
              Our work is not just about building houses; it's about crafting legacies that stand the test of time and climate.
            </p>
          </div>
          <div className="space-y-12">
            <div className="border-b border-black/10 pb-8 flex items-center">
              <span className="text-[#c82222] font-bold mr-4 text-lg">01.</span>
              <span className="text-xs uppercase tracking-widest font-bold text-gray-800">Concept Analysis</span>
            </div>
            <div className="border-b border-black/10 pb-8 flex items-center">
              <span className="text-[#c82222] font-bold mr-4 text-lg">02.</span>
              <span className="text-xs uppercase tracking-widest font-bold text-gray-800">Material Sourcing</span>
            </div>
            <div className="border-b border-black/10 pb-8 flex items-center">
              <span className="text-[#c82222] font-bold mr-4 text-lg">03.</span>
              <span className="text-xs uppercase tracking-widest font-bold text-gray-800">Precision Engineering</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
