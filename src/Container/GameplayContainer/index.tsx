import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GameplayView from '../../View/GameplayView';


const GameplayContainer: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddClick = () => {
    const inputs = document.querySelectorAll('.input-box') as NodeListOf<HTMLInputElement>;
    inputs.forEach(input => {
      input.value = inputValue;
    });
  };

  const handleTimerStop = () => {
    setIsPopupVisible(true);
    setScore(calculateScore());
  };

  const calculateScore = () => {
    return 100; // Replace this with your actual score calculation logic
  };

  const handleFinishClick = () => {
    navigate('/gameover');
  };

  return (
    <GameplayView
      inputValue={inputValue}
      onInputChange={handleInputChange}
      onAddClick={handleAddClick}
      onTimerStop={handleTimerStop}
      isPopupVisible={isPopupVisible}
      score={score}
      onFinishClick={handleFinishClick}
    />
  );
};

export default GameplayContainer;
