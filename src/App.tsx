import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeContainer from './Container/HomeContainer';
import PlayContainer from './Container/PlayContainer';
import GameplayContainer from './Container/GameplayContainer';

import  './App.css';
import GameOverContainer from './Container/GameOverContainer';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/play" element={<PlayContainer />} />
        <Route path="/gameplay" element={<GameplayContainer />} />
        <Route path="/gameover" element={<GameOverContainer />} />
      </Routes>
    </Router>
  );
};

export default App;





