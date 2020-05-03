import React from 'react'
import { GlobalContext } from './GlobalState'

export const Film = (props) => {

    const movie_id = props.match.params.id;

    const [movieDetails,setMovieDetails] = React.useState([]);
    const [movieGenre,setMovieGenre]= React.useState([]);
    const [video,setVideo] = React.useState([]);
    const apiKey = process.env.REACT_APP_API;

    React.useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}&language=ro`)
    .then(data => data.json()).then(data => {

        setMovieDetails(data);
        setMovieGenre(movieDetails.genres);
    })
    })
   
    React.useEffect( () => {
        fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${apiKey}&&append_to_response=videos`)
      .then(data => data.json()).then(data => {
        setVideo(data.results[0]);
        
      })
      },[video])

      const {adaugaFilmFavorite} = React.useContext(GlobalContext);
      const adaugaFavorite = () =>{
  
        const detaliiFilm = {
            id: props.match.params.id,
            nume: movieDetails.original_title,
            poza: movieDetails.poster_path,
        }
        adaugaFilmFavorite(detaliiFilm);
    }


    return (
        
        <div className="movies-wrapper">
            <div className="movies-card">
                <div className="imageCard">
                    <img src={`https://image.tmdb.org/t/p/w500/` + movieDetails.poster_path} alt=""/>
                </div>
                <div className="movieDetails">
                    <div className="movieTitle">
                        <span>{movieDetails.original_title}</span>
                    </div>
                    <div className="releaseDate">
                        <span>Data lansarii: {movieDetails.release_date}</span>
                    </div>
                    <div className="budget">
                    <span>Buget estimat: {movieDetails.budget}$</span>
                    </div>
                    <div className="genres">
                    <span>Genul filmului: {movieGenre && movieGenre.map(gen => { const name = gen.name;return name + ", ";})}</span>
                    </div>
                    <div className="overview">
                        <span>Prezentare generala: {movieDetails.overview}</span>
                    </div>
                    <div className="trailer">
                     <iframe width="560" height="315" src={`https://www.youtube.com/embed/` + video.key}  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <button className = "addFavoriteButton" onClick={adaugaFavorite}>Adauga la favorite</button>
                </div>
            </div>
            
        </div>
    )
}
