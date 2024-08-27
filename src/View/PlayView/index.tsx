import React from 'react';

const PlayView: React.FC<{ onBoxClick: () => void; isBackgroundLessTransparent: boolean; isCloser: boolean; }> = ({ onBoxClick, isBackgroundLessTransparent, isCloser }) => (
  <div className={`App ${isBackgroundLessTransparent ? 'less-transparent' : ''}`} onClick={onBoxClick}>
    <header className="App-header">
      <div className="overlay-image"></div>
      <div className="logo-overlay"></div>
      
      <div className={`box-container ${isCloser ? 'closer-boxes' : ''}`}>
        <div className="blue-box">YOU</div>
        <div className="blue-box">YOUR OPPONENT</div>
      </div>
    </header>
  </div>
);

export default PlayView;
