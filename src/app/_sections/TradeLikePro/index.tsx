"use client";
import { useState } from "react";

const TradeData = [
  {
    id: 1,
    label: "Install our app, 'Blackwell Invest'",
    imgSrc: "/images/guide-1.png",
  },
  {
    id: 2,
    label: "Choose a signal Master and click 'Copy'",
    imgSrc: "/images/guide-2.png",
  },
  {
    id: 3,
    label: "Set your trade size preferences",
    imgSrc: "/images/guide-3.png",
  },
  { id: 4, label: "Click 'Agree and Copy'", imgSrc: "/images/guide-4.png" },
];

const TradeLikePro = () => {
  const [activeTabId, setActiveTabId] = useState(TradeData[0].id);
  const activeTabData = TradeData.find((tab) => tab.id === activeTabId);

  return (
    <section className="w-full h-full text-center max-w-380 mx-auto">
      <div className="h-8 w-full"/>
      {/* top title of section */}
      <div className="relative w-full flex flex-col justify-end items-center overflow-hidden h-100 sm:h-120 ">
        <img
          src="/images/bg-1.png"
          alt="bg layer 1"
          className="absolute inset-0 w-full h-full aspect-auto object-cover object-[center_120px] scale-250 origin-center"
        />
        <h3 className="relative text-3xl text-light-blue font-semibold">
          Trade Like a Pro in Minutes
        </h3>
      </div>

      {/* divider */}
      <div className="h-4" />

      {/* overall content */}
      <div className="grid grid-cols-12 w-full sm:w-[80%] mx-auto text-center">
        {/* desktop view */}
        {/* left side */}
        <div
          className={`w-full h-full hidden gap-2 lg:flex lg:flex-col lg:col-span-6 p-4
        [&>div:nth-child(odd)]:border-yellow-200 [&>div:nth-child(odd)_span:first-child]:text-yellow-400  
        [&>div:nth-child(even)]:border-orange-400 [&>div:nth-child(even)_span:first-child]:text-orange-400`}
        >
          {TradeData.map((item, index) => {
            const isActive = item.id === activeTabId;
            const isOdd = (index + 1) % 2 !== 0;
            return (
              <div
                key={item.id}
                onClick={() => setActiveTabId(item.id)}
                className={`h-full w-full p-4 relative border rounded-xl flex justify-center items-center transition-all duration-500 text-white  
                    ${isActive ? "bg-[#2e4397] shadow-lg text-2xl font-semibold" : ""}
                      ${isActive && isOdd ? "[&>span:last-child]:text-yellow-400 border-gold " : ""}
                        ${isActive && !isOdd ? "[&>span:last-child]:text-orange-400 border-gold bg-[#2e4397] shadow-lg text-2xl font-semibold" : ""}
                    
                    `}
              >
                <span className="absolute sm:left-4 text-4xl italic">
                  {item.id}
                </span>
                <span className="max-w-[80%]">{item.label}</span>
              </div>
            );
          })}
        </div>
        {/* right side */}
        <div className="w-full hidden rounded-xl p-4 lg:flex lg:col-span-6 lg:max-h-128 lg:border-orange-400">
          {activeTabData && (
            <img
              key={activeTabId}
              src={TradeData.find((t) => t.id === activeTabId)?.imgSrc}
              alt="trade step image"
              className="w-full h-full mx-auto object-contain transition-all duration-500"
            />
          )}
        </div>

        {/* mobile view */}
        <div
          className={`w-full h-full flex flex-col col-span-12 p-4 lg:hidden gap-2 lg:col-span-6 
        [&>div:nth-child(odd)]:border-yellow-200 [&>div:nth-child(odd)_span:first-child]:text-yellow-400 
         [&>div:nth-child(even)]:border-orange-400 [&>div:nth-child(even)_span:first-child]:text-orange-400`}
        >
          {TradeData.map((item, index) => {
            const isActive = item.id === activeTabId;
            const isOdd = (index + 1) % 2 !== 0;
            return (
              <div
                key={item.id}
                onClick={() => setActiveTabId(item.id)}
                className="w-full flex flex-col lg:hidden"
              >
                <div
                  className={` w-full p-4 relative border rounded-xl flex justify-center items-center transition-all duration-500 text-white  
                    ${isActive ? "bg-[#2e4397] shadow-lg font-semibold border-gold " : ""}
                      ${isActive && isOdd ? "[&>span:last-child]:text-yellow-400" : ""}
                        ${isActive && !isOdd ? "[&>span:last-child]:text-orange-400" : ""}
                    `}
                >
                  <span className="absolute left-4 text-4xl italic">
                    {item.id}
                  </span>
                  <span className="max-w-[80%]">{item.label}</span>
                </div>
                <div
                  className={`w-full lg:hidden overflow-hidden transition-all duration-700 ease-in-out
                    ${isActive ? "max-h-250 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
                >
                  <div className="max-w-100 mx-auto p-4">
                    <img
                      src={item.imgSrc}
                      alt={item.label}
                      className="w-full h-auto mx-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="h-4" />
      {/* bottom part app installation */}
      <div className="relative flex w-full gap-4 justify-center items-center">
        <a
          href="https://play.google.com/store/apps/details?id=com.BlackwellGlobalInvestmentsUKLimited.pelican"
          className="w-30 h-10 rounded-xl overflow-hidden"
        >
          <img
            src="/images/google-play.jpg"
            alt="Submit Button"
            className="w-full h-full object-fit  "
          />
        </a>
        <a
          href="https://apps.apple.com/au/app/blackwell-invest/id1666036351"
          className="w-30 h-10 rounded-xl overflow-hidden"
        >
          <img
            src="/images/app-store.jpg"
            alt="Submit Button"
            className="w-full h-full object-fit"
          />
        </a>
      </div>
    </section>
  );
};
export default TradeLikePro;
