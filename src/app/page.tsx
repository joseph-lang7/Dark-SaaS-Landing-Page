import NavBar from "@/components/navbar/navbar";
import Banner from "../components/banner/banner";
import Hero from "@/components/hero/hero";
import LogoSection from "@/components/logo-section/logo-section";
import Features from "@/components/features/features";
export default function Home() {
  return (
    <>
      <Banner />
      <NavBar />
      <Hero />
      <LogoSection />
      <Features />
    </>
  );
}
