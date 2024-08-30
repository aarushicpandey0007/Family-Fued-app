import React, { useState } from 'react';
import Stopwatch from '../../Stopwatch';

const predefinedAnswers = ["bye", "my", "name", "pen", "book", "color", "cake", "Answer8"];

const GameplayView: React.FC<{
  inputValue: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAddClick: () => void;
  onTimerStop: () => void;
  isPopupVisible: boolean;
  score: number;
  onFinishClick: () => void;
}> = ({
  inputValue,
  onInputChange,
  onAddClick,
  onTimerStop,
  isPopupVisible,
  score,
  onFinishClick,
}) => {
  const [inputBoxes, setInputBoxes] = useState<string[]>(Array(8).fill(''));
  const [revealedAnswers, setRevealedAnswers] = useState<boolean[]>(Array(8).fill(false));
  const [yourScore, setYourScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0); // Placeholder for opponent's score

  const handleAddClick = () => {
    const answerIndex = predefinedAnswers.findIndex(
      answer => answer.toLowerCase() === inputValue.toLowerCase()
    );
    
    if (answerIndex !== -1 && !revealedAnswers[answerIndex]) {
      const newInputBoxes = [...inputBoxes];
      const newRevealedAnswers = [...revealedAnswers];
      newInputBoxes[answerIndex] = predefinedAnswers[answerIndex];
      newRevealedAnswers[answerIndex] = true;
      setInputBoxes(newInputBoxes);
      setRevealedAnswers(newRevealedAnswers);
      
      // Update your score
      setYourScore(yourScore + 1);
      
      onAddClick();
    }
  };

  const handleSkipClick = () => {
    // Logic for skip button can be implemented here if needed
  };

  return (
    <div className="App gameplay-page">
      <header className="App-header gameplay-header">
        <div className="overlay-image"></div>
        <div className="logo-overlay"></div>

        <div className="top-blue-boxes">
          <div className="blue-box top-left">YOU: {yourScore}</div>
          <div className="blue-box top-right">YOUR OPPONENT: {opponentScore}</div>
        </div>

        <div className="scorecard-container">
          <div className="scorecard">Your Score: {yourScore}</div>
          <div className="scorecard">Opponent Score: {opponentScore}</div>
        </div>

        <div className="stopwatch-box">
          <Stopwatch onTimeUp={onTimerStop} />
        </div>

        <div className="spacer-box">
          Look, it's mine ______
        </div>

        <div className="input-boxes-container">
          {inputBoxes.map((value, index) => (
            <input
              key={index}
              type="text"
              className="input-box"
              value={value}
              readOnly
            />
          ))}
        </div>

        <div className="new-input-container">
          <button className="play-button" onClick={handleSkipClick}>
            Skip
          </button>
          <input
            type="text"
            className="new-input"
            value={inputValue}
            onChange={onInputChange}
          />
          <button className="play-button" onClick={handleAddClick}>
            Add
          </button>
        </div>

        {isPopupVisible && (
          <div className="popup">
            <div className="popup-content">
              <div className="popup-blue-boxes">
                <div className="blue-box">YOU: {yourScore}</div>
                <div className="blue-box">YOUR OPPONENT: {opponentScore}</div>
              </div>
              <div className="score">
                ROUND RESULT: YOU
                <p>Round 1</p>
                
                <p>TOTAL:{yourScore}</p>
              </div>
              <button className="finish-button" onClick={onFinishClick}>
                Finish
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default GameplayView;




