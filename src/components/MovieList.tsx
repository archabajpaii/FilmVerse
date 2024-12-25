// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// function MovieList() {
//     const [movies,setMovies]=useState([]);
//     const [loading,setLoading]=useState(true);
//     const [error,setError]=useState('')

//     useEffect=(()=>{
//         const fetchMovies=async()=>{
//             try {
//                 const response=await axios.get()


                
//             } catch () {
                
//             }

//         }
//         fetchMovies();

//     },[])



//   return (
//     <>
//     <div className='w-full h-screen flex justify-center p-8'>
//         <div>
//             <input type="text" />
//             <button>Search</button>
//             <div>

//             </div>
//         </div>
//     </div>
//     </>
//   )
// }

// export default MovieList

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://www.omdbapi.com/?s=batman&apikey=8201c2fb");
        if (response.data.Search) {
          setMovies(response.data.Search); // Set the full list of movies
          setFilteredMovies(response.data.Search); // Initially, filteredMovies is the same as movies
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  // Filter movies based on search input
  useEffect(() => {
    const results = movies.filter((movie) =>
      movie.Title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredMovies(results);
  }, [search, movies]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Movie List</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search movies..."
        className="border p-2 mb-4 w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Movie List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMovies.map((movie) => (
          <div key={movie.imdbID} className="border p-4 shadow-md">
            <img src={movie.Poster} alt={movie.Title} className="w-full h-auto mb-2" />
            <h2 className="text-xl font-semibold">{movie.Title}</h2>
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
