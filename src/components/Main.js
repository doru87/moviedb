
import React from 'react'
import FilmeNoi from './FilmeNoi'
import {Switch, Route } from 'react-router-dom'
import { Film } from './Film'
import { SerialePopulare } from './SerialePopulare'
import { Serial } from './Serial'
import { Librarie } from './Librarie'

export const Main = () => {
  return (
    <div className="main">
      <div className="upperNav"></div>
      <div className="mainContent">
        <Switch>
          <Route path="/" exact component={FilmeNoi}></Route>
          <Route path="/search" exact component={SerialePopulare}></Route>
          <Route path="/your-library" exact component={Librarie}></Route>
          <Route path="/film/:id" component={Film}></Route>
          <Route path="/serial/:id" component={Serial}></Route>
        </Switch>
      </div>
    </div>
  )
}

