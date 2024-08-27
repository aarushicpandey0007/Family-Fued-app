import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeView from '../../View/HomeView';


const HomeContainer: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handlePlayButtonClick = () => {
    navigate('/play');
  };

  return (
    <HomeView
      onPlayClick={handlePlayButtonClick}
      toggleSidebar={toggleSidebar}
      isSidebarOpen={isSidebarOpen}
    />
  );
};

export default HomeContainer;
