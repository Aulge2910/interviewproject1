"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText);

const SplitTextComponent = ({ text = "Ready-To-Go-Strategies" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!textRef.current) return;

    // split into chars
    const split = new SplitText(textRef.current, {
      type: "chars,words",
      charsClass: "char",
    });

    gsap.from(split.chars, {
      autoAlpha: 0,
      yPercent: "random([-40, 40])",
      rotation: "random(-30, 30)",
      duration: 1,
      stagger: {
        from: "random",
        amount: 0.5,
        repeat: -1,
        yoyo: true,
      },
      ease: "back.out",
    });

    return () => {
      split.revert();
    };
  }, [text]); 

  return (
    <div ref={containerRef}>
      <h1 ref={textRef} key={text}>
        {text}
      </h1>
    </div>
  );
};

export default SplitTextComponent;
