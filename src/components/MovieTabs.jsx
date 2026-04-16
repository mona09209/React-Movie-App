import { useState } from "react";

function MovieTabs({ tabs }) {
  const [active, setActive] = useState(0);

  return (
    <div className="container mx-auto mt-14 px-3 sm:mt-20 sm:px-8">

      {/* Tabs Header */}
      <div className="mx-auto w-full max-w-full overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div
          className="relative mx-auto grid min-w-max snap-x snap-mandatory rounded-xl bg-slate-900/60 p-1 backdrop-blur-xl sm:w-fit sm:rounded-2xl sm:p-1.5"
          style={{
            gridTemplateColumns: `repeat(${tabs.length}, minmax(96px, 1fr))`,
          }}
        >

          {/* indicator */}
          <div
            className="absolute bottom-1 top-1 rounded-lg bg-red-600 transition-all duration-300 sm:bottom-1.5 sm:top-1.5 sm:rounded-xl"
            style={{
              width: `calc((100% - 0.5rem) / ${tabs.length})`,
              transform: `translateX(${active * 100}%)`,
            }}
          />

          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`relative z-10 snap-center px-3 py-2 text-xs font-semibold whitespace-nowrap transition sm:px-8 sm:text-base
                ${active === index ? "text-white" : "text-gray-400"}
              `}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="mt-5 animate-fade sm:mt-10">
        {tabs[active].content}
      </div>
    </div>
  );
}

export default MovieTabs;
