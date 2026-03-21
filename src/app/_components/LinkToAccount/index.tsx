"use client";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const LinkStepData = [
  {
    id: 1,
    imgSrc: "/images/step-1.png",
    description: "Install our app, “Blackwell Invest”",
  },
  {
    id: 2,
    imgSrc: "/images/step-2.png",
    description: "Login OR create a new account",
  },
  {
    id: 3,
    imgSrc: "/images/step-3.png",
    description: "Click “Account” ",
  },
  {
    id: 4,
    imgSrc: "/images/step-4.png",
    description: "Click “Link an account” ",
  },
  {
    id: 5,
    imgSrc: "/images/step-5.png",
    description: "Select “BlackwellGlobalAsia-Live” server",
  },
  {
    id: 6,
    imgSrc: "/images/step-6.png",
    description:
      " Fill in your Blackwell Global trading account OR create a new account ",
  },
  {
    id: 7,
    imgSrc: "/images/step-7.png",
    description: "Click “Copy Trades” ",
  },
  {
    id: 8,
    imgSrc: "/images/step-8.png",
    description: "Click “Done”",
  },
];

const LinkToAccount = () => {
  const ContainerRef = useRef<HTMLDivElement>(null);
  const SliderRef = useRef<HTMLUListElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = LinkStepData.length;

const [displayCount, setDisplayCount] = useState(4);
  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex >= LinkStepData.length - displayCount;

const goNext = () => {
  if (!isAtEnd) {
    setCurrentIndex((prev) => prev + 1);
  }
};

const goPrev = () => {
  if (!isAtStart) {
    setCurrentIndex((prev) => prev - 1);
  }
};

  useGSAP(() => {
    if (!ContainerRef || !SliderRef) return;
    const movePercent = 100 / displayCount;

    gsap.to(SliderRef.current, {
      xPercent: -movePercent * currentIndex,
      duration: 0.6,
      ease: "power2.out",
    });
  }, [currentIndex, displayCount]);

  

  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 640) {
        // less than sm
        setDisplayCount(1);
      } else if (window.innerWidth <= 1024) {
        // sm and above
        setDisplayCount(2);
      } else if (window.innerWidth <= 1280) {
        // xl and above
        setDisplayCount(3);
      } else {
        setDisplayCount(4);
      }
    };

    updateCount(); 
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  return (
    <section className="w-full h-full text-center my-10">
      {/* top title of section */}
      <div className="w-full flex justify-center items-center">
        <h3 className=" text-3xl text-light-blue font-semibold">
          How to Link MT4 Account
        </h3>
      </div>

      {/* carousel part */}

      <div className="w-full 2xl:w-[80vw] p-8 mx-auto">
        <div
          ref={ContainerRef}
          className="w-full relative h-100 sm:h-120 overflow-hidden"
        >
          <button
            onClick={goPrev}
            className={`absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1d295c] text-white z-100 ${
              isAtStart
                ? "bg-gray-600 cursor-not-allowed opacity-50"
                : "bg-dark-blue hover:bg-[#28387d] text-white shadow-lg"
            }`}
          >
            {"<"}
          </button>
          <button
            onClick={goNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1d295c] text-white z-100 ${
              isAtEnd
                ? "bg-gray-600 cursor-not-allowed opacity-50"
                : "bg-dark-blue hover:bg-[#28387d] text-white shadow-lg"
            }`}
          >
            {">"}
          </button>
          <ul ref={SliderRef} className="w-full flex flex-nowrap h-full">
            {LinkStepData.map((item, index) => (
              <li
                key={item.id}
                className="flex flex-col justify-center items-center shrink-0 item-card w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 border rounded-2xl p-4 border-amber-400"
              >
                <img
                  src={item.imgSrc}
                  alt={`step ${item.id} to link to MT4 account`}
                  className="w-full max-w-62.5 sm:max-w-none sm:w-full mx-auto object-contain"
                />
                <span className="text-white text-center">
                  {item.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <a
          href=""
          className="rounded-md bg-[#df7c1e] hover:bg-[#f88921] text-white p-2 min-w-40"
        >
          Register Now
        </a>
      </div>
    </section>
  );
};
export default LinkToAccount;
