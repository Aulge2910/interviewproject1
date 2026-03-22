import Image from "next/image";
import Hero from "@/app/_sections/Hero";
import FastMatching from "./_sections/FastMatching";
import EasyAnalysis from "./_sections/EasyAnalysis";
import TradeLikePro from "./_sections/TradeLikePro";
import LinkToAccount from "./_sections/LinkToAccount";
import WhyChooseUs from "./_sections/WhyChooseUs";
import NavigateInClick from "./_sections/NavigateInClick";
import EnrollNow from "./_sections/EnrollNow";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <FastMatching/>
      <EasyAnalysis/>
      <TradeLikePro/>
      <LinkToAccount/>
      <WhyChooseUs/>
      <NavigateInClick/>
      <EnrollNow/>
    </div>
  );
}
