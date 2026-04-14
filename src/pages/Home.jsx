import api from "../api";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import Hero from "../components/Hero";
import MovieSlider from "../components/MovieSlider";
import FAQSection from "../components/FAQSection";
import Newsletter from "../components/Newsletter";
import MovieTabs from "../components/MovieTabs";
import MovieGrid from "../components/MovieGrid";

function Home() {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;


  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [topRated, setToprated] = useState([]);
  const [nowplaying, setNowplaying] = useState([]);

  const getTrending = async () => {
    try {
      const { data } = await api.get(
        `/trending/movie/day?api_key=${apiKey}`
      );

      setTrending(data.results.slice(0, 10));
         console.log(data.results)
    } catch (error) {
      console.log(error.message);
    }
  };

  const getPopular = async () => {
    try {
      const { data } = await api.get(
        `/movie/popular?api_key=${apiKey}`
      );
         console.log(data.results)
      setPopular(data.results.slice(0, 10));
    } catch (error) {
      console.log(error.message);
    }
  };

  const getUpcoming = async () => {
    try {
      const { data } = await api.get(
        `/movie/upcoming?api_key=${apiKey}`
      );
         console.log(data.results)
      setUpcoming(data.results.slice(0, 10));
    } catch (error) {
      console.log(error.message);
    }
  };

  const getTopRated = async () => {
    try {
      const { data } = await api.get(
        `/movie/top_rated?api_key=${apiKey}`
      );
         console.log(data.results)
      setToprated(data.results.slice(0, 10));
    } catch (error) {
      console.log(error.message);
    }
  };

  const getNowplaying = async () => {
    try {
      const { data } = await api.get(
        `/movie/now_playing?api_key=${apiKey}`
      );
         console.log(data.results)
      setNowplaying(data.results.slice(0, 10));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getPopular();
    getTrending();
    getUpcoming();
    getNowplaying();
  }, []);

  return (

    <div>
      <Hero />
    <MovieSlider
  title="Trending Now" description="Handpicked for your cinematic taste"
  movies={trending.slice(0,8)}
/>
<MovieTabs
  tabs={[
    {
      title: "Trending",
      content: <MovieGrid movies={trending.slice(0,10)} />
    },
    {
      title: "Popular",
      content: <MovieGrid movies={popular.slice(0,10)} />
    },
     {
      title: "Top Rated",
      content: <MovieGrid movies={topRated.slice(0,10)} />
    },
    {
      title: "Upcoming",
      content: <MovieGrid movies={upcoming.slice(0,10)} />
    },
    {
      title: "Now playing",
      content: <MovieGrid movies={nowplaying.slice(0,10)} />
    }
  ]}
/>
     <FAQSection />


<MovieSlider
  title="Popular Movies" description="Handpicked for your cinematic taste"
  movies={popular.slice(0,10)}
/>
     <Newsletter />
    </div>
  );
}

export default Home;