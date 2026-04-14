import { useState } from "react";

function MovieTabs({ tabs }) {
    
  const [active, setActive] = useState(0);

  return (
    <div className="container mx-auto  mt-25">

      {/* Tabs Header */}
      <div className="relative flex gap-2 bg-slate-900/60
                      backdrop-blur-xl p-2 rounded-2xl w-fit mx-auto">

        {/* indicator */}
        <div
          className="absolute top-2 bottom-2 bg-red-600 rounded-xl 
                     transition-all duration-300"
          style={{
            width: `calc(100% / ${tabs.length} - 5px)`,
            transform: `translateX(${active * 100}%)`,
          }}
        />

        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`relative z-10 px-6 py-2 font-semibold transition
              ${active === index ? "text-white" : "text-gray-400"}
            `}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-10 animate-fade">
        {tabs[active].content}
      </div>
    </div>
  );
}

export default MovieTabs;