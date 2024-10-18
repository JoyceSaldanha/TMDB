import React, { useEffect, useState } from 'react'

export default function Movie() {
    let [movieData,setMovieData] = useState([])

    let getMovie = () => {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=e1ba13ff124d0f98a9019805d19ce7a0')
        .then((res) => res.json())
        .then((res) => {
           setMovieData(res.results);
        })
    }

    useEffect(() => {
        getMovie();
    },[])

    let list = movieData.map((item,i) => {
        return(
            <div className="card" key={i}>
                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="image" className='poster'/>
                <h3>{item.title}</h3>
            </div>
        )
    })

  return (
    <>
        <h1>Movie List</h1>
        <div className="card-container">
            {list}
        </div>
    </>
  )
}
