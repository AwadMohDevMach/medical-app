import Brands from "@/components/Frontend/Brands";
import Hero from "@/components/Frontend/Hero";
import TabbedSection from "@/components/Frontend/TabbedSection";
import DoctorsList from "@/components/DoctorsList";

export default function Home() {
  return (
    <section>
      <div className="bg-blue-950">
        <Hero />
      </div>

      <div className="bg-slate-100">
        <Brands />
      </div>

      <TabbedSection />
      <DoctorsList />
      <DoctorsList title="In-person doctor visit" isInPerson={true} className="bg-blue-50 py-10 lg:py-28 dark:bg-slate-800"/>
    </section>
  );
}
