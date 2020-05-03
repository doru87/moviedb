import React,{createContext} from 'react'

export const GlobalContext = createContext();

  export const GlobalProvider = ({children}) => {
    var array = JSON.parse(localStorage.getItem('movies') || '[]');
    const [listaFilmeFavorite,setlistaFilmeFavorite] = React.useState(array);
  
  function adaugaFilmFavorite(lista){
      for (var i = 0; i < listaFilmeFavorite.length; i++){
        if (listaFilmeFavorite[i].id === lista.id) {
          listaFilmeFavorite.splice(i,1);
          break;
        }
    }
        setlistaFilmeFavorite([...listaFilmeFavorite,lista]);
  }

  function stergeFilm(idfilm) {
    for (var i = 0; i < listaFilmeFavorite.length; i++){
      if (listaFilmeFavorite[i].id === idfilm) {
        listaFilmeFavorite.splice(i,1);
        break;
      }
    }

    setlistaFilmeFavorite(listaFilmeFavorite);
    localStorage.setItem('movies', JSON.stringify(listaFilmeFavorite));
    window.location.reload();
  }
  
  localStorage.setItem('movies', JSON.stringify(listaFilmeFavorite));

    return (<GlobalContext.Provider value={{ listaFilmeFavorite:listaFilmeFavorite,adaugaFilmFavorite,stergeFilm }}>
    {children}
    </GlobalContext.Provider>)
}


