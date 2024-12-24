// import React from 'react'
// import MovieImage from '../assets/MovieImagee.png'

// function Hero() {
   
//   return (
//     <>
//     <div className='w-full h-[600px] flex justify-between p-5 items-center '>
//         <h1 className=' text-3xl font-extrabold text-shadow-lg p-6 text-pink-600'>Welcome to Movie Magic!😍</h1>
//         <img src={MovieImage} alt="hi" className='object-contain h-[500px] mb-10'  />
//     </div>

    
//     </>
//   )
// }

// export default Hero

import React from 'react';
import MovieImage from '../assets/MovieImagee.png';
import { useNavigate } from 'react-router-dom';


function Hero() {
    const navigate=useNavigate();
    function gotoMovies(){
        navigate('/movies')
    }
  return (
    <div className="w-full h-[600px] flex justify-between items-center bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white p-5">
      {/*Text Content */}
      <div className="space-y-6 max-w-md p-8">
        <h1 className="text-4xl md:text-6xl font-extrabold animate-fade-in">
          Welcome to <span className="text-pink-600">Movie Magic! 😍</span>
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Discover a world of cinematic wonders. Explore thousands of movies, 
          from timeless classics to the latest blockbusters. Your journey starts here!
        </p>
        <div className="flex space-x-4">
          <button onClick={gotoMovies} className="px-6 py-3 bg-pink-600 rounded-lg text-white font-semibold hover:bg-pink-700 transition duration-300">
            Get Started
          </button>
          <button onClick={gotoMovies} className="px-6 py-3 bg-transparent border border-pink-600 rounded-lg text-pink-600 font-semibold hover:bg-pink-600 hover:text-white transition duration-300">
            Browse Movies
          </button>
        </div>
      </div>

      {/* image section */}
      <div>
        <img
          src={MovieImage}
          alt="Cinema Experience"
          className="object-contain h-[500px] drop-shadow-lg transform hover:scale-105 transition duration-500"
        />
        
      </div>
    </div>
  );
}

export default Hero;
