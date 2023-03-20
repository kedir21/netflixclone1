import React , { useEffect, useState } from 'react'
import './row.css'
import axios from '../../axios'
import Youtube from 'react-youtube'
// @ts-ignore
import movieTrailer from 'movie-trailer';



const base_Url ='https://image.tmdb.org/t/p/original/';



const Row = ({title, fetchUrl, isLargeRow}) => {

   const [movies, setMovies] = useState([]);
   const [trailerUrl, setTrailerUrl] = useState("");

useEffect(() => {
    async function fetchData() {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results)
        // console.log(request.data.results);
             
        return request
     

    }
    fetchData()
   
}, [fetchUrl]);

const opts ={
    height:'390',
    width:'100%',
    playerVars:{
        autoplay:1,
    },
};

// const handleClick = (movie) => {
//     if(trailerUrl) {
//         setTrailerUrl("");
//     }
//     else{
//         movieTrailer (movie?.title || movie?.name || movie.original_name)
//         .then ((url) => {
//             const urlParams = new URLSearchParams(new URL(url).search);
//             setTrailerUrl(urlParams.get('v'));
//         })
//         .catch ((error) => console.log(error));
//     }
// }

const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          console.log("Trailer URL:", url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log("URL Params:", urlParams);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  


  return (
    <div className='row'>
        
            <h1>{title}</h1>
            <div className='row_posters'>
            {/* {movies.map((movie)=>(

            <img key={movie.id} onClick = { (movie) => handleClick(movie) } className={`row_poster ${isLargeRow && "row_posterLarge"}`} 

            src={`${base_Url}${ isLargeRow ? movie.poster_path :movie.backdrop_path } `} 
                
            alt={movie.name} />

            ))
            } */}
            {movies.map((movie) =>
   (
    <img
      key={movie.id}
      onClick={() => handleClick(movie)}
      className={`row_poster ${isLargeRow && "row_posterLarge"}`}
      src={`${base_Url}${
        isLargeRow ? movie.poster_path : movie.backdrop_path
      }`}
      alt={movie.name}
    />
  ) 
)}

            </div>
            <div style={{padding:'20px'}}>
            { trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
            </div>
        
    </div>

  )
}

export default Row