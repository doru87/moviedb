import React from 'react'
import { GlobalContext } from './GlobalState';

export const Librarie = () => {

    const {listaFilmeFavorite,stergeFilm} = React.useContext(GlobalContext);

    const mainStyle = {
        button: {
        width:50,
        height:40,
        borderRadius: "20%",
        backgroundColor: "#4a6878",
        opacity: 1,
        color:"#ffff",
        }
    };

    return (
        <div className="libraryWrapper">
            <ul>
                {listaFilmeFavorite.map(film => (
                 <li><img src={`https://image.tmdb.org/t/p/w500` +  film.poza} /> <a href={`http://localhost:3000/serial/` + film.id}><span>{film.nume}</span></a> <button style={mainStyle.button} onClick={ () => stergeFilm(film.id)}>Sterge</button></li>       
                ))}
            </ul>
        </div>
    )
}
