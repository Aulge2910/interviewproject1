"use client";
import { useState } from "react";

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
  return (
    <section className="w-full h-full text-center mx-auto lg:w-[80vw]">
      {/* top title of section */}
      <div className="w-full relative flex justify-center items-end h-60 lg:h-100 overflow-hidden ">
        <img
          src="/images/bg-2.png"
          alt="bg layer 1"
          className="-z-10 w-full aspect-12/6 absolute inset-0 object-cover object-[center_-20px]"
        />
        <h3 className=" text-3xl text-light-blue font-semibold">
          Why Choose Us ?
        </h3>
      </div>
      <div className="flex flex-col w-full p-8 gap-2">
        {Reason.map((item, index) => (
          <div
            key={item.id}
            className="w-full bg-white border rounded-2xl items-center justify-start sm:justify-center 
            p-2 sm:grid flex flex-wrap gap-3 sm:gap-8 sm:grid-cols-[auto_20%_50%]"
          >
            <div className="w-20 h-16">
              <img
                src={item.imgSrc}
                alt="icon of reason of choosing us"
                className=""
              />
            </div>
            <div className="">
              <span className="text-xl font-semibold text-dark-blue">
                {item.label}
              </span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="">{item.text}</span>
            </div>
          </div>
        ))}
        <div className="h-4" />

        <a
          href=""
          className="rounded-md bg-[#df7c1e] hover:bg-[#f88921] text-white p-2 min-w-40"
        >
          Register Now
        </a>
      </div>

      {/* divider */}
      <div className="h-4" />

      <div className="h-4" />
    </section>
  );
};
export default WhyChooseUs;
