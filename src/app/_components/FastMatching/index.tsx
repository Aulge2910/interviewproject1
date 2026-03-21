const FastMatching = () => {

    return (
      <section className="w-full min-h-screen flex items-center justify-center p-4">
        <div className="w-full flex items-center justify-center flex-col">
          <h3 className="text-light-blue text-3xl font-semibold ">
            Fast Matching
          </h3>
          <div className="w-full grid grid-cols-12">
            <div className="w-full col-span-12 sm:col-span-6 p-6 flex items-center justify-center sm:justify-end">
              <div className="relative w-62.5 h-auto overflow-hidden rounded-xl">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                >
                  <source src="/video/mobile-video.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="w-full col-span-12 sm:col-span-6 flex items-center sm:items-start justify-center flex-col gap-4">
              <div className="flex gap-2">
                <img
                  src="/images/list-icon.png"
                  alt="list icon"
                  className="w-16 h-6"
                />
                <span className="text-white text-2xl">Spotlight</span>
              </div>
              <div className="flex gap-2">
                <img
                  src="/images/list-icon.png"
                  alt="list icon"
                  className="w-16 h-6"
                />
                <span className="text-white text-2xl">Top Strategies</span>
              </div>
              <div className="flex gap-2">
                <img
                  src="/images/list-icon.png"
                  alt="list icon"
                  className="w-16 h-6"
                />
                <span className="text-white text-2xl">Low Drawdown</span>
              </div>
              <div className="flex gap-2">
                <img
                  src="/images/list-icon.png"
                  alt="list icon"
                  className="w-16 h-6"
                />
                <span className="text-white text-2xl">Medium Drawdown</span>
              </div>
              <div className="flex gap-2">
                <img
                  src="/images/list-icon.png"
                  alt="list icon"
                  className="w-16 h-6"
                />
                <span className="text-white text-2xl">High Drawdown</span>
              </div>{" "}
              <div className="flex gap-2">
                <img
                  src="/images/list-icon.png"
                  alt="list icon"
                  className="w-16 h-6"
                />
                <span className="text-white text-2xl">New Strategies</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default FastMatching;