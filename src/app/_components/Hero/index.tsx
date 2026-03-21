const Hero = () => {
  return (
    <section className="w-full min-h-screen font-atrotis border p-2 sm:pt-10 lg:pt-20 flex items-center justify-center  ">
      <div className="w-full grid grid-cols-12 lg:grid-cols-12 p-2 sm:py-10 lg:pt-20 gap-8 ">
        {/* left section */}
        <div className="w-full aspect-auto xl:aspect-9/12 2xl:aspect-auto col-span-12 sm:col-span-6 order-2 sm:order-1">
          <img
            src="/images/hand.png"
            alt="hero image"
            className="w-full h-full  "
          />
        </div>

        {/* right section */}
        <div className="w-full h-full col-span-12 sm:col-span-6 flex flex-col sm:order-2">
          <div className="w-full flex items-center justify-center flex-col p-2 lg:pt-10">
            <h1 className="font-atrotis font-extrabold text-4xl lg:text-6xl text-light-blue">
              COPY TRADING
            </h1>
            <h2 className="font-atrotis font-light italic text-2xl lg:text-4xl text-white">
              with Blackwell Invest
            </h2>
          </div>
          <div className="h-4" />
          {/* app installation part google/apple */}
          <div className="relative flex w-full gap-2 lg:gap-4 justify-center items-center">
            <div className="absolute -top-22 right-0 lg:top-0 lg:-right-4 -z-10">
              <img
                src="/images/regular.png"
                alt="verified backgroun icon"
                className="w-30 h-30 sm:w-40 sm:h-40"
              />
            </div>
            <button className="w-30 h-12 rounded-xl overflow-hidden">
              <img
                src="/images/google-play.jpg"
                alt="Submit Button"
                className="w-full h-full object-fit  "
              />
            </button>
            <button className="w-30 h-12 rounded-xl overflow-hidden">
              <img
                src="/images/app-store.jpg"
                alt="Submit Button"
                className="w-full h-full    object-fit"
              />
            </button>
          </div>

          {/* divider */}
          <div className="h-14" />
          {/* lower section of right */}
          <div className="flex flex-col items-start justify-center gap-1">
            <h2 className="font-atrotis font-semibold text-light-blue text-xl lg:text-4xl">
              Choose & Trade
            </h2>
            <h3 className="font-atrotis font-semibold text-gold text-xl lg:text-4xl italic">
              Ready-To-Go Strategies
            </h3>
            <span className="text-white">
              Browse and copy hundreds of investment strategies developed by
              master traders! Whether you are a pro or beginner, you can now
              trade quicker and more confidently.
            </span>
            <div className="flex my-4 [&>span]:border [&>span]:p-2 [&>span]:rounded-md gap-4">
              <span className="border-amber-200">Forex</span>
              <span className="border-[#df7c1e]">Precious Metals</span>
              <span className="border-red-500">Oil</span>
              <span className="border-blue-300">Indices</span>
            </div>
            <button className="rounded-md bg-[#df7c1e] text-white p-2 min-w-40">
              Register Now
            </button>
            <div className="h-2" />
            <span className="text-white italic">
              When you invest, your vapital is at risk. Be prudent
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
