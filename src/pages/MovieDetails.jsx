import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";
import imageUrl from "../helper";
import TrailerModal from "../components/TrailerModal";

function MovieDetails() {
  const { id } = useParams();
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState([]);
  const [trailer, setTrailer] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);

  /* ================= FETCH MOVIE ================= */
  const getMovie = async () => {
    try {
      const { data } = await api.get(`/movie/${id}?api_key=${apiKey}`);
      setMovie(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  /* ================= FETCH CAST ================= */
  const getCredits = async () => {
    try {
      const { data } = await api.get(`/movie/${id}/credits?api_key=${apiKey}`);
      setCredits(data.cast.slice(0, 10));
    } catch (err) {
      console.log(err.message);
    }
  };

  const getTrailer = async () => {
    try {
      const { data } = await api.get(`/movie/${id}/videos?api_key=${apiKey}`);

      const officialTrailer = data.results.find(
        (video) => video.type === "Trailer" && video.site === "YouTube",
      );

      if (officialTrailer) {
        setTrailer(officialTrailer.key);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getMovie();
    getCredits();
    getTrailer();
  }, [id]);

  if (!movie) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="bg-[#050505] text-white min-h-screen">
      {/* ================= HERO BACKDROP ================= */}
      <div className="relative h-[75vh] w-full overflow-hidden ">
        <img
          src={imageUrl(movie.backdrop_path)}
          className="absolute inset-0 w-full h-full object-cover scale-110 z-0"
        />

        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* cinematic gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-t
                        from-[#050505] via-black/40 to-transparent z-20"
        />

        {/* CONTENT */}
        <div className="relative z-30 h-full flex items-end px-6 md:px-16 pb-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              {movie.title}
            </h1>

            <div className="flex items-center gap-4 mt-4 text-sm text-gray-300">
              <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-lg font-bold">
                ⭐ {movie.vote_average.toFixed(1)}
              </span>

              <span>{movie.release_date?.slice(0, 4)}</span>

              <span>{movie.runtime} min</span>
            </div>

            <p className="mt-5 text-gray-300 line-clamp-3">{movie.overview}</p>

            {/* buttons */}
            <div className=" mt-25">
           
            </div>
          </div>
        </div>
      </div>

      {/* ================= DETAILS SECTION ================= */}
      <div className="px-6 md:px-16 -mt-32 relative z-20">
        <div className="grid md:grid-cols-[300px_1fr] gap-10">
          {/* POSTER CARD */}
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={imageUrl(movie.poster_path)}
              className="w-full h-full object-cover"
            />
          </div>

          {/* INFO */}
          <div>
            {/* Genres */}
            <div className="flex flex-wrap gap-2 mb-6">
              {movie.genres.map((g) => (
                <span
                  key={g.id}
                  className="bg-slate-800 px-3 py-1 rounded-full text-sm"
                >
                  {g.name}
                </span>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-3">Overview</h2>

            <p className="text-gray-300 leading-relaxed">{movie.overview}</p>

            {/* Extra info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              <Info label="Status" value={movie.status} />
              <Info label="Language" value={movie.original_language} />
              <Info
                label="Budget"
                value={`$${movie.budget?.toLocaleString()}`}
              />
              <Info
                label="Revenue"
                value={`$${movie.revenue?.toLocaleString()}`}
              />
            </div>
             {/* buttons */}
            <div className="flex flex-wrap gap-4 mt-6">
              <button
  onClick={() => setShowTrailer(true)}
  className="flex items-center gap-2
             bg-red-600 hover:bg-red-700
             px-6 py-3 rounded-xl font-bold transition"
>
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5"
  >
    <path d="M8 5.14v14l11-7-11-7z" />
  </svg>

  Watch Trailer
</button>

              <button
                className="bg-white/10 backdrop-blur
                                 px-6 py-3 rounded-xl font-semibold
                                 hover:bg-white/20 transition"
              >
                + My List
              </button>
            </div>
          </div>

        </div>
        
      </div>

      {/* ================= CAST ================= */}
      <section className="px-6 md:px-16 mt-20 pb-20">
        <h2 className="text-3xl font-black mb-8">Top Cast</h2>

        <div className="flex gap-6 overflow-x-auto scrollbar-hide cursor-pointer">
          {credits.map((actor) => (
            <div key={actor.id} className="min-w-35 group text-center">
              <img
                src={imageUrl(actor.profile_path)}
                className="w-32 h-32 rounded-full object-cover
                           mx-auto group-hover:scale-110 transition"
              />

              <p className="mt-3 font-semibold text-sm">{actor.name}</p>

              <p className="text-xs text-gray-400">{actor.character}</p>
            </div>
          ))}
        </div>
      </section>

      {showTrailer && trailer && (
        <TrailerModal
          trailerKey={trailer}
          onClose={() => setShowTrailer(false)}
        />
      )}
    </div>
  );
}

/* ================= SMALL INFO CARD ================= */
function Info({ label, value }) {
  return (
    <div
      className="bg-slate-900/60 backdrop-blur
                    rounded-xl p-4 text-center"
    >
      <p className="text-gray-400 text-xs">{label}</p>
      <p className="font-bold mt-1">{value || "-"}</p>
    </div>
  );
}

export default MovieDetails;
