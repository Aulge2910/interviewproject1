import Image from "next/image";
import Hero from "@/app/_components/Hero";
import FastMatching from "./_components/FastMatching";
import EasyAnalysis from "./_components/EasyAnalysis";
import TradeLikePro from "./_components/TradeLikePro";
import LinkToAccount from "./_components/LinkToAccount";
import WhyChooseUs from "./_components/WhyChooseUs";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <FastMatching/>
      <EasyAnalysis/>
      <TradeLikePro/>
      <LinkToAccount/>
      <WhyChooseUs/>
    </div>
  );
}
