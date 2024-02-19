import ActionMessage from "@/components/message/ActionMessage";
import BenefitSection from "@/sections/BenefitSection";
import HeroSection from "@/sections/HeroSection";
import RatingSection from "@/sections/RatingSection";
import WhySection from "@/sections/WhySection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <ActionMessage/>
      <HeroSection />
      <RatingSection />
      <WhySection />
      <BenefitSection />
    </div>
  );
}
