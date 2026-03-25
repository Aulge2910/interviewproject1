"use client";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useModal } from "@/app/_components/Modal/ModalProvider";
gsap.registerPlugin(ScrollTrigger);
const Reason = [
  {
    id: 1,
    label: "Regulated",
    text: "The copy trading platform is regulated. Our technology partner is regulated. And so are we, as a brokerage. We operate under strict compliance because your trust and peace of mind are everything.",
    imgSrc: "/images/icon-1.png",
  },
  {
    id: 2,
    label: "0 Commissions",
    text: "When investing, the small margins matter. Blackwell Invest offers 0 commissions investing, and 0 cost to install our app.",
    imgSrc: "/images/icon-2.png",
  },
  {
    id: 3,
    label: "User-friendly",
    text: "With an intuitive interface, easy trade execution, and hassle-free management, copying top traders has never been simpler. Trade smarter, not harder!",
    imgSrc: "/images/icon-3.png",
  },
  {
    id: 4,
    label: "Tier 1 liquidity",
    text: "Blackwell Invest sources the best liquidity to provide a deep product range and broad market access. Fast order execution and transparent pricing.",
    imgSrc: "/images/icon-4.png",
  },
];

const WhyChooseUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const {openModal} = useModal();
 
  useGSAP(
    () => {
      const whyChooseUsItem = gsap.utils.toArray(".why-choose-us");
      if (whyChooseUsItem.length > 0) {
 
      gsap.from(whyChooseUsItem, {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "restart pause resume none",
        },
      });   }
    },
    { scope: containerRef, dependencies: [] },
  );
  return (
    <section className="w-full h-full text-center max-w-380 mx-auto">
      <div className="h-8 w-full" />
      {/* top title of section */}
      <div className="relative w-full flex flex-col justify-end items-center overflow-hidden h-100 sm:h-120 ">
        <img
          src="/images/bg-2.png"
          alt="bg layer 1"
          className="absolute inset-0 w-full h-full aspect-auto object-cover object-[center_120px] scale-170 origin-center"
        />
        <h3 className="relative text-3xl text-light-blue font-semibold">
          Why Choose Us ?
        </h3>
      </div>

      {/* mapping of item data */}
      <div
        ref={containerRef}
        className="flex flex-col w-full sm:w-[80%] gap-2 mx-auto p-4"
      >
        {Reason.map((item, index) => (
          <div
            key={item.id}
            className="why-choose-us w-full bg-white border rounded-2xl items-center justify-start p-4 sm:grid flex flex-wrap gap-3 sm:grid-cols-[auto_20%_auto]"
          >
            {/* first icon in row */}
            <div className="w-20 h-full">
              <img
                src={item.imgSrc}
                alt="icon of reason of choosing us"
                className=""
              />
            </div>
            {/* highlighted tutle */}
            <div className="">
              <span className="text-xl font-semibold text-dark-blue">
                {item.label}
              </span>
            </div>
            {/* description of title */}
            <div className="col-span-2 sm:col-span-1">
              <span className="">{item.text}</span>
            </div>
          </div>
        ))}
        <div className="h-4" />
        <div className="w-full flex items-center justify-center">
          <button
            className="text-center rounded-md bg-[#df7c1e] hover:bg-[#f88921] text-white p-2 min-w-40"
            onClick={() => openModal("register", "Registration Form")}
          >
            Register Now
          </button>
        </div>
      </div>

      {/* divider */}
      <div className="h-8" />
    </section>
  );
};
export default WhyChooseUs;
