import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeContainer from './Page/HomePage';
import PlayContainer from './Page/PlayPage';
import GameplayContainer from './Page/GameplayPage';

import GameOverContainer from './Page/GameOverPage';

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





