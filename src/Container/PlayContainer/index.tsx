import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PlayView from '../../View/PlayView';


const PlayContainer: React.FC = () => {
  const [isBackgroundLessTransparent, setIsBackgroundLessTransparent] = useState(false);
  const [isCloser, setIsCloser] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsBackgroundLessTransparent(true);
    setIsCloser(true);
    setTimeout(() => {
      navigate('/gameplay');
    }, 500);
  };

  return (
    <PlayView
    onBoxClick={handleClick}
    isBackgroundLessTransparent={isBackgroundLessTransparent}
    isCloser={isCloser}
  />
);
};

export default PlayContainer;
