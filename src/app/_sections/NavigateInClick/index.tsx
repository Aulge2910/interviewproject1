"use client";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const NavigateData = [
  {
    id: 1,
    iconSrc: "/images/icon1.png",
    iconActiveSrc: "/images/icon1-blue.png",
    imgSrc: "/images/reason-1.png",
    label: "Discover",
    description:
      "Explore all the investment Masters available on Blackwell Invest. Dive into their profiles and analyse their profitability at a glance.",
  },
  {
    id: 2,
    iconSrc: "/images/icon2.png",
    iconActiveSrc: "/images/icon2-blue.png",
    imgSrc: "/images/reason-2.png",
    label: "Activity",
    description:
      "See the past trades made by the signals you are copying from the last 30 days or track their open positions. Monitor their strategy, and make informed decisions with timely updates of the trades shaping your portfolio.",
  },
  {
    id: 3,
    iconSrc: "/images/icon3.png",
    iconActiveSrc: "/images/icon3-blue.png",
    imgSrc: "/images/reason-3.png",
    label: "Trade",
    description:
      "Seamlessly trade oil CFDs, indices, and currency pairs with ease.",
  },
  {
    id: 4,
    iconSrc: "/images/icon4.png",
    iconActiveSrc: "/images/icon4-blue.png",
    imgSrc: "/images/reason-4.png",
    label: "Positions",
    description:
      "Easily track the status of all your trades and monitor your account metrics in real-time.",
  },
  {
    id: 5,
    iconSrc: "/images/icon5.png",
    iconActiveSrc: "/images/icon5-blue.png",
    imgSrc: "/images/reason-5.png",
    label:
      "Easily track the status of all your trades and monitor your account metrics in real-time. ",
    description:
      "Access detailed information about your trading account, monitor copier drawdown levels, assess your profitability, and keep track of your  trade performance – all in one place!",
  },
];

const NavigateInClick = () => {
  const [activeTab, setActiveTab] = useState(1);
  const currentData = NavigateData.find((item) => item.id === activeTab);

  return (
    <section className="w-full h-full text-center my-10 lg:w-[80vw] mx-auto">
      {/* top title of section */}
      <div className="w-full flex justify-center items-center">
        <h3 className=" text-3xl text-light-blue font-semibold">
          Navigate Our App in 5 Clicks
        </h3>
      </div>
      <div className="h-6" />

      <div className="w-full flex">
        <ul className="w-full flex">
          {NavigateData.map((item, index) => {
            const isActive = activeTab === item.id;
            return (
              <li
                className=""
                key={item.id}
                onClick={() => setActiveTab(item.id)}
              >
                <img
                  src={isActive ? item.iconActiveSrc : item.iconSrc}
                  alt=""
                  className="w-28.5 h-12 bg-white rounded-t-2xl object-contain"
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="bg-[#f2df79] w-full sm:h-92 flex flex-col sm:grid sm:grid-cols-12 items-center justify-center text-start">
        {currentData ? (
          <div className="sm:col-span-7 p-10 flex flex-col gap-4 transition-all duration-500 ">
            <h3 className="text-dark-blue font-semibold text-xl">
              {currentData.label}
            </h3>
            <span>{currentData.description}</span>
          </div>
        ) : (
          ""
        )}

        <div className="sm:col-span-5 p-10">
          {currentData ? (
            <img src={currentData.imgSrc} alt="" className="" />
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="h-4" />
      <div className="relative flex w-full gap-2 lg:gap-4 justify-center items-center">
         
        <a
          href="https://play.google.com/store/apps/details?id=com.BlackwellGlobalInvestmentsUKLimited.pelican"
          className="w-30 h-12 rounded-xl overflow-hidden"
        >
          <img
            src="/images/google-play.jpg"
            alt="Submit Button"
            className="w-full h-full object-fit  "
          />
        </a>
        <a
          href="https://apps.apple.com/au/app/blackwell-invest/id1666036351"
          className="w-30 h-12 rounded-xl overflow-hidden"
        >
          <img
            src="/images/app-store.jpg"
            alt="Submit Button"
            className="w-full h-full    object-fit"
          />
        </a>
      </div>
    </section>
  );
};
export default NavigateInClick;
