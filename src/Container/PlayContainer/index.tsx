import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PlayView from '../../View/PlayView';

const PlayContainer: React.FC = () => {
  const [isCloser, setIsCloser] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsCloser(true);
    setTimeout(() => {
      navigate('/gameplay');
    }, 900); // Adjust the timeout to match the animation duration if needed
  };

  return (
    <PlayView
      onBoxClick={handleClick}
      isCloser={isCloser}
    />
  );
};

export default PlayContainer;

