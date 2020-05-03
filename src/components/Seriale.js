import React from 'react'
import {ReactComponent as Playicon} from '../svgs/play.svg'
import { Link } from 'react-router-dom';
import { ModalPlayer } from './ModalPlayer';

export const Seriale = (props) => {

    const [isModalOpen,setIsModalOpen] = React.useState(false);
    const [video,setVideo] = React.useState([]);
    const apiKey = process.env.REACT_APP_API;

    const mainStyle = {
        svg: {
            margin:"0 auto"
        },
        button: {
        width:40,
        height:40,
        borderRadius: "50%",
        backgroundColor: "#1db954",
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
   
React.useEffect( () => {
    fetch(`https://api.themoviedb.org/3/tv/${props.series.id}/videos?api_key=${apiKey}&language=en-US`)
  .then(data => data.json()).then(data => {
    setVideo(data.results[0]); 
  })
  },[video])

    return (
        <>
        <div className="card">
        <Link to={`/serial/` + props.series.id}>
            <div className="cardImage">
                <img src={`https://image.tmdb.org/t/p/w500/` + props.series.poster_path} alt=""/>
            </div>
            </Link>
            <div className="cardContent">
                <h3>{props.series.original_name}</h3>
                <span>{props.series.first_air_date}</span>
                <div>{(props.series.overview).slice(0,140) + '...'}</div>
            </div>
            <button className="playIcon" onClick={openModal} style={mainStyle.button}><Playicon style={mainStyle.svg}/></button>
            { video && <ModalPlayer isModalOpen={isModalOpen} closedModal={closedModal} video = {video.key} /> }
        </div> 
    </>
    )
}
