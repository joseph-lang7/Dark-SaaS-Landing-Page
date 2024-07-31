import NavBar from "@/components/navbar/navbar";
import Banner from "../components/banner/banner";
import Hero from "@/components/hero/hero";
import LogoSection from "@/components/logo-section/logo-section";
import Features from "@/components/features/features";
import ImageWithText from "@/components/image-with-text/image-with-text";
import Faqs from "@/components/faqs/faqs";
export default function Home() {
  return (
    <div className="bg-black">
      <Banner />
      <NavBar />
      <Hero />
      <LogoSection />
      <Features />
      <ImageWithText />
      <Faqs />
    </div>
  );
}
