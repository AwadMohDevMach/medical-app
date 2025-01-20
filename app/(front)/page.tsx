import Brands from "@/components/Frontend/Brands";
import Hero from "@/components/Frontend/Hero";
import TabbedSection from "@/components/Frontend/TabbedSection";

export default function Home() {
  return (
    <section >
      <div className="bg-blue-950">
      <Hero />
      </div>

      <div className="bg-slate-100">
      <Brands/>
      </div>

      <TabbedSection/>
    </section>
  );
}
