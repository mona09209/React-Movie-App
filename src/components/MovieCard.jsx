import { Link } from "react-router-dom";
import imageUrl from "../helper";
function MovieCard({ movie }) {

 
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="group relative rounded-2xl overflow-hidden cursor-pointer
                      transform transition duration-500 hover:scale-105">

        {/* IMAGE */}
        <img
          src={imageUrl(movie.poster_path)}
          alt={movie.title}
          className="w-full h-[340px] object-cover"
        />

        {/* DARK GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t
                        from-black via-black/40 to-transparent
                        opacity-90" />

        {/* RATING BADGE */}
        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur
                        text-yellow-400 text-xs font-bold
                        px-2 py-1 rounded-lg">
          ⭐ {movie.vote_average.toFixed(1)}
        </div>

        {/* TITLE */}
        <div className="absolute bottom-0 p-4">
          <h3 className="font-bold text-sm md:text-base leading-tight
                         group-hover:text-red-500 transition">
            {movie.title}
          </h3>

          <p className="text-xs text-gray-300 mt-1">
            {movie.release_date?.slice(0,4)}
          </p>
        </div>

        {/* HOVER GLOW */}
        <div className="absolute inset-0 rounded-2xl
                        ring-0 group-hover:ring-2
                        ring-red-600 transition" />
      </div>
    </Link>
  );
}

export default MovieCard;