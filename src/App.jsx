import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MovieDetails from "./pages/MovieDetails"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import "swiper/css";
import "swiper/css/navigation";
import MovieList from "./components/MovieList"

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/movie/:id" element={<MovieDetails />} />
           <Route path="/movies" element={<MovieList/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>

    </>
  )
}

export default App
