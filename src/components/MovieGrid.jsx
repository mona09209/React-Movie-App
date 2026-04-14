import MovieCard from "./MovieCard";

function MovieGrid({ movies }) {
  return (
    <div
      className="
        container mx-auto
        grid gap-6
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
  );
}

export default MovieGrid;