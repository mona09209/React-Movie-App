import hero from "../assets/images/hero.png";
import { useState } from "react";

function Hero() {
    const [showTrailer, setShowTrailer] = useState(false)
  return (
   <div className="relative flex h-[95vh] w-full items-center overflow-hidden ">
        <div className="absolute inset-0 z-0 ">
            <img src={hero}
                 className="h-full w-full object-cover object-top" alt="Hero Movie" />
            <div className="hero-gradient absolute inset-0"></div>
            <div className="bottom-gradient absolute inset-0"></div>
        </div>

        <div className="relative z-10 w-full px-6 md:px-16 lg:w-3/5">
            <div className="mb-6 flex items-center gap-4 ">
                <span className="flex items-center gap-1 font-bold text-yellow-500">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    8.9 IMDB
                </span>
             
            </div>

            <h1 className="mb-4 text-6xl font-black leading-[0.85] md:text-8xl lg:text-9xl tracking-tighter animate-fadeIn">
                INTER<span className="text-red-600 italic">STELLAR</span>
            </h1>

            <p className="mb-10 max-w-xl text-lg leading-relaxed text-gray-300 opacity-90">
                A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival. A masterpiece directed by Christopher Nolan.
            </p>

            <div className="flex flex-wrap gap-4 ">
               <button
  onClick={() => setShowTrailer(true)}
  className="group flex items-center gap-3 rounded-full
             bg-white px-10 py-4 text-sm font-black text-black
             transition hover:bg-red-600 hover:text-white
             hover:scale-105 active:scale-95 cursor-pointer"
>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 transition-transform group-hover:scale-125"><path d="M8 5.14v14l11-7-11-7z"/></svg>
                    PLAY NOW
                </button>
                <button className="glass-card flex items-center gap-3 rounded-full px-10 py-4 text-sm font-bold ">
                    + Our LIST
                </button>
            </div>
          
        </div>

        {showTrailer && (
  <div
    onClick={() => setShowTrailer(false)}
    className="fixed inset-0 z-50 flex items-center justify-center
               bg-black/60 backdrop-blur-lg"
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative w-[90%] md:w-[900px] aspect-video
                 rounded-xl overflow-hidden shadow-2xl"
    >
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/zSWdZVtXT7E?autoplay=1"
        title="Interstellar Trailer"
        allow="autoplay"
        allowFullScreen
      />

      <button
        onClick={() => setShowTrailer(false)}
        className="absolute top-3 right-3 bg-black/70
                   px-3 py-1 rounded text-white"
      >
        ✕
      </button>
    </div>
  </div>
)}
    </div>
    
  )

 
}

export default Hero