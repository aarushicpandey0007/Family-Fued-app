import React, { useState } from 'react';

const PlayView: React.FC<{ onBoxClick: () => void; isCloser: boolean; }> = ({ onBoxClick, isCloser }) => {
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setAnimate(true);
    onBoxClick();
  };

  return (
    <div className="App" onClick={handleClick}>
      <header className="App-header">
        <div className="overlay-image"></div>
        <div className="logo-overlay"></div>
        
        <div className={`box-container ${isCloser ? 'closer-boxes' : ''}`}>
          <div className={`blue-box ${animate ? 'animate-left-upwards' : ''}`}>YOU</div>
          <div className={`blue-box ${animate ? 'animate-right-upwards' : ''}`}>YOUR OPPONENT</div>
        </div>
      </header>
    </div>
  );
};

export default PlayView;


