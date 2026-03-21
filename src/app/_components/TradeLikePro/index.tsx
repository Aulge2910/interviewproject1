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
    <section className="w-full h-full">
      {/* top title of section */}
      <div className="w-full relative flex justify-center items-end h-100 border overflow-hidden">
        <img
          src="/images/bg-1.png"
          alt="bg layer 1"
          className="-z-10 w-full aspect-12/6 absolute inset-0 object-cover object-[center_-20px]"
        />
        <h3 className=" text-3xl text-light-blue font-semibold">
          Trade Like a Pro in Minutes
        </h3>
      </div>

      {/* divider */}
      <div className="h-4" />

      <div className="grid grid-cols-12 w-full lg:w-[80vw] gap-2 mx-auto">
        {/* desktop view */}
        {/* left side */}
        <div className="w-full h-full hidden lg:flex lg:flex-col gap-2 lg:col-span-6 [&>div:nth-child(odd)]:border-yellow-200 [&>div:nth-child(odd)_span:first-child]:text-yellow-400  [&>div:nth-child(even)]:border-orange-400 [&>div:nth-child(even)_span:first-child]:text-orange-400 p-4">
          {TradeData.map((item, index) => {
            const isActive = item.id === activeTabId;
            const isOdd = (index + 1) % 2 !== 0;
            return (
              <div
                key={item.id}
                onClick={() => setActiveTabId(item.id)}
                className={`h-full w-full p-8 relative border rounded-xl flex justify-center items-center transition-all duration-500 text-white  
                    ${isActive ? "bg-[#2e4397] shadow-lg text-2xl font-semibold" : ""}
                      ${isActive && isOdd ? "[&>span:last-child]:text-yellow-400 border-gold " : ""}
                        ${isActive && !isOdd ? "[&>span:last-child]:text-orange-400 border-gold bg-[#2e4397] shadow-lg text-2xl font-semibold" : ""}
                    
                    `}
              >
                <span className="absolute left-4 text-4xl italic">
                  {item.id}
                </span>
                <span className="">{item.label}</span>
              </div>
            );
          })}
        </div>
        {/* right side */}
        <div className="hidden lg:flex lg:col-span-6 lg:w-full lg:max-h-128 rounded-xl lg:border-orange-400 lg:p-8">
          {activeTabData && (
            <img
              key={activeTabId}
              src={TradeData.find((t) => t.id === activeTabId)?.imgSrc}
              alt="trade step image"
              className="max-w-100 h-full mx-auto object-contain transition-all duration-500"
            />
          )}
        </div>

        {/* mobile view */}
        <div className="w-full h-full flex flex-col col-span-12 lg:hidden gap-2 lg:col-span-6 [&>div:nth-child(odd)]:border-yellow-200 [&>div:nth-child(odd)_span:first-child]:text-yellow-400  [&>div:nth-child(even)]:border-orange-400 [&>div:nth-child(even)_span:first-child]:text-orange-400 p-4">
          {TradeData.map((item, index) => {
            const isActive = item.id === activeTabId;
            const isOdd = (index + 1) % 2 !== 0;
            return (
              <div
                key={item.id}
                onClick={() => setActiveTabId(item.id)}
                className="w-full flex flex-col gap-3 lg:hidden p-4"
              >
                <div
                  className={` w-full p-8 relative border rounded-xl flex justify-center items-center transition-all duration-500 text-white  
                    ${isActive ? "bg-[#2e4397] shadow-lg text-2xl font-semibold border-gold " : ""}
                      ${isActive && isOdd ? "[&>span:last-child]:text-yellow-400" : ""}
                        ${isActive && !isOdd ? "[&>span:last-child]:text-orange-400" : ""}
                    `}
                >
                  <span className="absolute left-4 text-4xl italic">
                    {item.id}
                  </span>
                  <span className="">{item.label}</span>
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
    </section>
  );
};
export default TradeLikePro;
