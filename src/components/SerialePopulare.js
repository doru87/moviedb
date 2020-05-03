import React from 'react'
import { Seriale } from './Seriale'
import { SearchBarSeriale } from './SearchBarSeriale'

export const SerialePopulare = () => {
    const [latestTvSeries,setLatestTvSeries] = React.useState([]);

    const callbackFunction = (childData) => {
      setLatestTvSeries(childData);
    }
      return (
          <>
          <SearchBarSeriale parentCallback={callbackFunction}/>
          <div className="grid">
          {latestTvSeries.map(latest => (
              <div className="cardsWrap" key={latest.id}>
                <div className="movieName"><h2>{latest.name}</h2></div>
              <p className="popularity">Popularitate:{latest.popularity}</p>
              <Seriale series={latest}/>
              </div>
          ))}
              </div>
          </>
      )
  }
  
