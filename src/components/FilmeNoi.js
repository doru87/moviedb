import React from 'react'
import { Filme } from './Filme'
import { SearchBarFilme } from './SearchBarFilme';

const FilmeNoi = () => {

  const [latestMovies,setLatestMovies] = React.useState([]);

  const callbackFunction = (childData) => {
    setLatestMovies(childData);
 }

  return (
    <>
      <SearchBarFilme parentCallback={callbackFunction}/>
        <div className="grid">
      {latestMovies.map(latestMovie => (
          <div className="cardsWrap" key={latestMovie.id}>
            <div className="movieName"><h2>{latestMovie.original_title}</h2></div>
            <p className="popularity">Popularitate:{latestMovie.popularity}</p>
          <Filme movie={latestMovie}/>
          </div>
      ))}
      </div>
    
    </>
  )
}

export default FilmeNoi;