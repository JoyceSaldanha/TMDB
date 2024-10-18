import React, {useEffect,useState} from 'react'

export default function Tv() {
    let [tvData,setTvData] = useState([]);

    let getTv = () => {
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=e1ba13ff124d0f98a9019805d19ce7a0')
        .then((res) => res.json())
        .then((res) => {
           setTvData(res.results);
        })
    }

    useEffect(() => {
        getTv();
    },[])

    let list = tvData.map((item,i) => {
        return(
            <div className="card" key={i}>
                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="image" className='poster'/>
                <h3>{item.title}</h3>
            </div>
        )
    })
  return (
    <>
        <h1>TV List</h1>
        <div className="card-container">
            {list}
        </div>
    </>
  )
}
