import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import MovieCard from "./MovieCard";

function MovieSlider({ title,description, movies }) {

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="px-6 md:px-16 mt-14 text-white hero-circle">

       <div className="mb-8 flex items-end justify-between">
          <div>
             <h2 className="text-2xl font-black tracking-tight text-white md:text-4xl">
        {title}
      </h2>
             <p className="text-sm text-gray-500">
        {description}
      </p>
          </div>
          <a href="#" className="text-sm font-bold text-red-600 hover:underline">View All</a>
        </div>

      <div className="relative group">

        {/* Prev */}
        <button
          ref={prevRef}
          className="absolute left-0 top-1/2 cursor-pointer -translate-y-1/2 z-20
                     bg-black/60 backdrop-blur p-3 rounded-full
                     hidden group-hover:flex">
          <ArrowLeft size={28} className="text-red-500" />
        </button>

        {/* Next */}
        <button
          ref={nextRef}
          className="absolute right-0 top-1/2 cursor-pointer -translate-y-1/2 z-20
                     bg-black/60 backdrop-blur p-3 rounded-full
                     hidden group-hover:flex">
          <ArrowRight  size={28} className="text-red-500"/>
        </button>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={2}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        >
          {movies.map((movie, index) => (
            <SwiperSlide key={movie.id}>
              <div className="relative">
                <span
                className="absolute -left-4 bottom-0
                           text-[110px] font-black
                           text-white/20 z-1 select-none">
                {index + 1}
              </span>
                <MovieCard movie={movie} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

export default MovieSlider;