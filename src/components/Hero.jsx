import hero from "../assets/images/hero.png";
import { useState } from "react";

function Hero() {
  const [showTrailer, setShowTrailer] = useState(false);

  return (
    <div className="relative flex min-h-[90vh] w-full items-center overflow-hidden pt-28 pb-12 sm:min-h-[95vh] sm:pt-32 sm:pb-16">
      <div className="absolute inset-0 z-0">
        <img
          src={hero}
          className="h-full w-full object-cover object-[62%_top] sm:object-top"
          alt="Hero Movie"
        />
        <div className="hero-gradient absolute inset-0"></div>
        <div className="bottom-gradient absolute inset-0"></div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-16 lg:w-3/5">
        <div className="mb-4 flex items-center gap-4 sm:mb-6">
          <span className="flex items-center gap-1 text-sm font-bold text-yellow-500 sm:text-base">
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            8.9 IMDB
          </span>
        </div>

        <h1 className="mb-4 max-w-[12ch] text-4xl leading-[0.88] tracking-tighter animate-fadeIn sm:text-6xl md:text-8xl lg:text-9xl font-black">
          INTER<span className="text-red-600 italic">STELLAR</span>
        </h1>

        <p className="mb-8 max-w-xl text-sm leading-relaxed text-gray-300 opacity-90 sm:mb-10 sm:text-base md:text-lg">
          A team of explorers travel through a wormhole in space in an
          attempt to ensure humanity&apos;s survival. A masterpiece directed
          by Christopher Nolan.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <button
            onClick={() => setShowTrailer(true)}
            className="group flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-xs font-black text-black transition hover:scale-105 hover:bg-red-600 hover:text-white active:scale-95 sm:w-auto sm:px-10 sm:py-4 sm:text-sm cursor-pointer"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 transition-transform group-hover:scale-125"
            >
              <path d="M8 5.14v14l11-7-11-7z" />
            </svg>
            PLAY NOW
          </button>
          <button className="glass-card flex w-full items-center justify-center gap-3 rounded-full px-6 py-3 text-xs font-bold sm:w-auto sm:px-10 sm:py-4 sm:text-sm">
            + Our LIST
          </button>
        </div>
      </div>

      {showTrailer && (
        <div
          onClick={() => setShowTrailer(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-lg sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-xl shadow-2xl"
          >
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/zSWdZVtXT7E?autoplay=1"
              title="Interstellar Trailer"
              allow="autoplay"
              allowFullScreen
            />

            <button
              onClick={() => setShowTrailer(false)}
              className="absolute right-3 top-3 rounded bg-black/70 px-3 py-1 text-sm text-white"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
