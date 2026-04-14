import { useEffect, useState } from "react";
import api from "../api";
import MovieCard from "../components/MovieCard";
import { ArrowLeft, ArrowRight } from 'lucide-react';
function MovieList() {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH MOVIES ================= */
  const getMovies = async (pageNumber = 1) => {
    try {
      setLoading(true);

      const { data } = await api.get(
        `/movie/popular?api_key=${apiKey}&page=${pageNumber}`
      );

      setMovies(data.results);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getMovies(page);
  }, [page]);

  return (
    <div className="bg-[#050505] min-h-screen text-white">

      {/* ================= HERO HEADER ================= */}
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b
                        from-[#1a1a1a] via-[#050505]
                        to-[#050505]" />

        <div className="relative text-center">
          <h1 className="text-4xl text-red-600 md:text-6xl font-black tracking-tight">
            Explore Movies
          </h1>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Discover trending, popular and top rated movies from around the world.
          </p>
        </div>
      </div>

    

      {/* ================= MOVIE GRID ================= */}
      <section className="px-6 md:px-16 pb-14">

        {loading ? (
          <p className="text-center text-gray-400">Loading movies...</p>
        ) : (
          <div
            className="
              grid gap-7
              grid-cols-2
              sm:grid-cols-3
              md:grid-cols-4
              lg:grid-cols-5
            "
          >
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </section>

      {/* ================= PAGINATION ================= */}
      <div className="flex justify-center gap-4 pb-20">

        <button
          onClick={() => page > 1 && setPage(page - 1)}
          className="px-6 py-3 rounded-xl bg-slate-900
                     hover:bg-slate-800 transition"
        >
          <ArrowLeft />
        </button>

        <span className="flex items-center font-bold text-lg">
          {page}
        </span>

        <button
          onClick={() => setPage(page + 1)}
          className="px-6 py-3 rounded-xl bg-red-600
                     hover:bg-red-700 transition"
        >
           <ArrowRight />
        </button>
      </div>

    </div>
  );
}

export default MovieList;