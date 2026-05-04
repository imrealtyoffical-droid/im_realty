import Navbar from "@/components/layout/Navbar";
import Projects from "@/components/home/Projects";
import CommercialProject from "@/components/home/CommercialProject";
import Footer from "@/components/layout/Footer";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      
      {/* Page Hero */}
      <div className="pt-32 md:pt-40 pb-20 px-6 md:px-24">
        <div className="max-w-7xl mx-auto border-l border-primary-red pl-6 md:pl-12">
          <p className="text-primary-red text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase mb-6">Archive / 01</p>
          <h1 className="text-4xl md:text-9xl font-bold uppercase tracking-tighter leading-none text-white">
            The <br /> Collection
          </h1>
        </div>
      </div>

      <Projects />
      <CommercialProject />

      {/* Additional Page Content: Process */}
      <div className="bg-[#0a0a0a] py-32 px-6 md:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-bold uppercase tracking-tight text-white mb-8">Structural Integrity <br /> & Artistic Purity</h2>
            <p className="text-silver/40 text-sm leading-loose">
              Every project in our collection undergoes a rigorous selection process. We analyze geological stability, local architectural heritage, and future sustainability before a single sketch is made. 
              Our work is not just about building houses; it's about crafting legacies that stand the test of time and climate.
            </p>
          </div>
          <div className="space-y-12">
            <div className="border-b border-white/5 pb-8">
              <span className="text-primary-red font-bold mr-4">01.</span>
              <span className="text-xs uppercase tracking-widest font-bold">Concept Analysis</span>
            </div>
            <div className="border-b border-white/5 pb-8">
              <span className="text-primary-red font-bold mr-4">02.</span>
              <span className="text-xs uppercase tracking-widest font-bold">Material Sourcing</span>
            </div>
            <div className="border-b border-white/5 pb-8">
              <span className="text-primary-red font-bold mr-4">03.</span>
              <span className="text-xs uppercase tracking-widest font-bold">Precision Engineering</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
