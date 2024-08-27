import React from 'react';

const HomeView: React.FC<{ onPlayClick: () => void; toggleSidebar: () => void; isSidebarOpen: boolean; }> = ({ onPlayClick, toggleSidebar, isSidebarOpen }) => (
  <div className="App">
    <header className="App-header">
      <div className="overlay-image"></div>
      <div className="logo-overlay"></div>
      <img
        src={require('../../assets/familylogo.png')}
        alt="Family Feud Logo"
        className="centered-logo"
      />
      <div className="menu-icon" onClick={toggleSidebar}>
        &#9776;
      </div>
      <button className="play-button" onClick={onPlayClick}>
        PLAY
      </button>
    </header>

    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <div className="close-btn" onClick={toggleSidebar}>
        &times;
      </div>
      <nav className="sidebar-nav">
        <a href="#music">M u s i c</a>
        <hr />
        <a href="#sound">S o u n d</a>
        <hr />
        <a href="#help">H e l p</a>
        <hr />
      </nav>
    </div>
  </div>
);

export default HomeView;
