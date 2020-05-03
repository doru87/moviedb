import React from 'react'
import { GlobalContext } from './GlobalState'

export const Serial = (props) => {

    const movie_id = props.match.params.id;

    const [seriesDetails,setSeriesDetails] = React.useState([]);
    const [seriesCreatedBy,setSeriesCreatedBy] = React.useState([]);
    
    const [seriesGenre,setSeriesGenre]= React.useState([]);
    const [video,setVideo] = React.useState([]);
    const apiKey = process.env.REACT_APP_API;

    React.useEffect(() => {
      fetch(`https://api.themoviedb.org/3/tv/${movie_id}?api_key=${apiKey}&language=ro`)
    .then(data => data.json()).then(data => {

        setSeriesDetails(data);
        setSeriesCreatedBy(data.networks[0]);
        setSeriesGenre(data.genres);
    })
    })

    React.useEffect( () => {
        fetch(`https://api.themoviedb.org/3/tv/${movie_id}/videos?api_key=${apiKey}&language=en-US`)
      .then(data => data.json()).then(data => {
        setVideo(data.results[0]);
      })
      },[video])

      const {adaugaFilmFavorite} = React.useContext(GlobalContext);

      const adaugaFavorite = () =>{
        const detaliiFilm = {
            id: props.match.params.id,
            nume: seriesDetails.original_name,
            poza: seriesDetails.backdrop_path,
        }
        adaugaFilmFavorite(detaliiFilm);
    }
    return (
        <div className="movies-wrapper">
            <div className="movies-card">
                <div className="seriesImageCard">
                    <img src={`https://image.tmdb.org/t/p/w500` + seriesDetails.backdrop_path} alt=""/>
                </div>
                <div className="movieDetails">
                    <div className="movieTitle">
                        <span>{seriesDetails.original_name}</span>
                    </div>
                     <div className="releaseDate">
                        <span>Data lansarii: {seriesDetails.first_air_date}</span>
                    </div>
                  
                    <div className="networks">
                        <span>Produs de: </span> <img src={`https://image.tmdb.org/t/p/h15` + seriesCreatedBy.logo_path} alt=""/>
                    </div>
                    <div className="seasons">
                        <span>Numarul de sezoane: {seriesDetails.number_of_seasons}</span>
                    </div>
                     
                    <div className="genres">
                    <span>Genul serialului: {seriesGenre && seriesGenre.map(gen => { const name = gen.name;return name + ", ";})}</span>
                    </div>
                    
                    <div className="overview">
                        <span>Prezentare generala: {seriesDetails.overview}</span>
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
