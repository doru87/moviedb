import React from 'react'

export const SearchBarSeriale = (props) => {

    const [searchMovie,setSearchMovie] = React.useState("");
    const [movieList,setMovieList] = React.useState([]);
    const [movieListHandleChange,setMovieListHandleChange] = React.useState([]);

    const apiKey = process.env.REACT_APP_API

    React.useEffect(() => {
      let unmounted = false;
      fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=ro&page=1`)
    .then(data => data.json()).then(data => {
      if (!unmounted) {
        setMovieList(data.results);
        setMovieListHandleChange(data.results);
      }
    })
    return () => { unmounted = true };
  },[])

    props.parentCallback(movieList);

    const handleChange = (event) => {

        setSearchMovie(event.target.value);
        if (event.target.value.length == 0){
          setMovieList(movieListHandleChange);
        }else{
          setMovieList(movieListHandleChange);
        }
    }
    const handleClick = (event) => {

        const results = movieList.filter(latest =>
            latest.original_name.toLowerCase().includes(searchMovie)
          );
          setMovieList(results);

        props.parentCallback(movieList);
    }
    
    return (
        <div>
        <div className="searchWrapper">
          <input
            type="text"
            value={searchMovie}
            onChange={handleChange}
            placeholder=""
            onKeyPress={event => {
              if (event.key === 'Enter') {
                handleClick()
              }
            }}
          />
          <button className = "searchButton" onClick={handleClick}>Cauta film</button>
          </div>
          
        </div>
    )
}
