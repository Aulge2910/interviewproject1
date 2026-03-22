const FastMatchingData = [
  { id: "1", label: "Spotlight" },
  { id: "2", label: "Top Strategies" },
  { id: "3", label: "Low Drawdown" },
  { id: "4", label: "Medium Drawdown" },
  { id: "5", label: "High Drawdown" },
  { id: "6", label: "New Strategies" },
];

const FastMatching = () => {
  return (
    <section className="flex items-center justify-center max-w-380 mx-auto">
      <div className="w-full flex items-center justify-center flex-col p-4 gap-2">
        <h3 className="text-light-blue text-3xl font-semibold ">
          Fast Matching
        </h3>
        <div className="w-full grid grid-cols-12">
          {/* video at the left part */}
          <div className="w-full flex items-center justify-center col-span-12 sm:col-span-6 sm:justify-end p-4">
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
          {/* text at the right part */}
          <div className="w-full flex items-center justify-center flex-col col-span-12 sm:col-span-6 sm:items-start gap-4 p-4">
            {FastMatchingData.map((item, index) => (
              <div key={item.id} className="flex gap-2">
                <img
                  src="/images/list-icon.png"
                  alt="list icon"
                  className="w-16 h-6"
                />
                <span className="text-white text-2xl">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FastMatching;
