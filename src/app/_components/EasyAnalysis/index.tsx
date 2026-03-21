const EasyAnalysis = () => {

    return (
      <section className="w-full min-h-screen flex items-center justify-center">
        <div className="w-full flex items-center justify-center flex-col gap-4">
          <h3 className="text-light-blue text-3xl font-semibold ">
            Easy Analysis
          </h3>
          <span className="w-full lg:w-[60vw] text-center text-gold text-2xl">
            Instant clarity on the Masters' profile. Get a snapshot of their
            trade history, profitability, risk and portfolio all in one place.
          </span>

          <div className="relative w-62.5">
            <img src="/images/mobile-2.png" alt="easy analysis" className="" />
            <img
              src="/images/function-1.png"
              alt="easy analysis section 1 zoom"
              className="absolute -top-6 -left-1/2"
            />
            <img
              src="/images/function-2.png"
              alt="easy analysis section 2 zoom"
              className="absolute top-22 -right-1/2"
            />
            <img
              src="/images/function-3.png"
              alt="easy analysis section 3 zoom"
              className="absolute top-46 -left-1/2"
            />

            <img
              src="/images/function-4.png"
              alt="easy analysis section 4 zoom"
              className="absolute top-62 -right-1/2"
            />
            <img
              src="/images/function-5.png"
              alt="easy analysis section 5 zoom"
              className="absolute -bottom-10 -left-1/2"
            />
          </div>
        </div>
      </section>
    );
}

export default EasyAnalysis;