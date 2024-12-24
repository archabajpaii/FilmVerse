import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./pages/About"
import MovieList from "./components/MovieList"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Header/>
        
        <Routes>
          <Route path="/movies" element={<MovieList/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path='/' element={
            <>
              <Hero/>
              <About/>
              <Contact/>
             
             
            </>
          }/>
        </Routes>
        <Footer/>

        </BrowserRouter>

      
    </>
  )
}

export default App
