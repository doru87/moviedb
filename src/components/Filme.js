import React from 'react'
import {ReactComponent as Playicon} from '../svgs/play.svg'
import { Link } from 'react-router-dom';
import { ModalPlayer } from './ModalPlayer';

export const Filme = (props) => {

    const [isModalOpen,setIsModalOpen] = React.useState(false);
    const [video,setVideo] = React.useState([]);
    const apiKey = process.env.REACT_APP_API;

    React.useEffect( () => {
        fetch(`https://api.themoviedb.org/3/movie/${props.movie.id}/videos?api_key=${apiKey}&&append_to_response=videos`)
      .then(data => data.json()).then(data => {
        setVideo(data.results[0]);
        
      })
      },[video])

    const mainStyle = {
        svg: {
            margin:"0 auto"
        },
        button: {
        width:40,
        height:40,
        borderRadius: "50%",
        backgroundColor: "#4a6878",
        display: "flex",
        alignItems: "center",
        opacity: 1,
        position: "absolute",
        bottom:20,
        right: 20,
        }
    };

    const openModal = () => {
        setIsModalOpen(true);
    }
    
    const closedModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div className="card">
            <Link to={`/film/` + props.movie.id}>
                <div className="cardImage">
                    <img src={`https://image.tmdb.org/t/p/w500/` + props.movie.poster_path} alt=""/>
                </div>
            </Link>
            <div className="cardContent">
                <h3>{props.movie.original_title}</h3>
                <span>{props.movie.release_date}</span>
                <div>{(props.movie.overview).slice(0,120) + '...'}</div>
            </div>
            <button className="playIcon" onClick={openModal} style={mainStyle.button}><Playicon style={mainStyle.svg}/></button>
            { video && <ModalPlayer isModalOpen={isModalOpen} closedModal={closedModal} video = {video.key} /> }
        </div> 
    )
}
