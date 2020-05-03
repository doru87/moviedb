import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Nav } from './components/Nav';
import { Main } from './components/Main';
import {GlobalProvider} from './components/GlobalState';

export const App = () => {

  return (
    <GlobalProvider>
    <div className="outerWrap">
      <div className="App">
        <Nav/>
        <Main/>
      </div>
      {/* <div className="musicControls">music controls</div> */}
    </div>
    </GlobalProvider>
  );
}

export default App;
