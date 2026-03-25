"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EasyAnalysis from "./EasyAnalysis";
import FastMatching from "./FastMatching";
gsap.registerPlugin(ScrollTrigger);

const HorizontalSections = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const sections = gsap.utils.toArray<HTMLDivElement>(
        ".horizontal-section",
      );
      if (!containerRef.current) return;

      let mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1,

            snap: 1 / (sections.length - 1),
            end: () => "+=" + containerRef.current?.offsetWidth,
          },
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="w-full max-w-380">
      <div className="flex  flex-col lg:flex-row lg:flex-nowrap lg:w-fit">
        <div className="horizontal-section w-full max-min-h-screen shrink-0">
          <FastMatching />
        </div>
        <div className="horizontal-section w-full min-h-screen shrink-0 border-l border-white/10">
          <EasyAnalysis />
        </div>{" "}
      </div>
    </div>
  );
};

export default HorizontalSections;
