import React, { useState, useEffect } from 'react';
import Stopwatch from '../../Stopwatch';
import '../../Styles/Gameplay.css';

const predefinedAnswers = [
  ["bye", "my", "name", "pen", "book", "color", "cake", "Answer8"], // Round 1
  ["item1", "item2", "item3", "item4", "item5", "item6", "item7", "Answer8"], // Round 2
  ["thing1", "thing2", "thing3", "thing4", "thing5", "thing6", "thing7", "Answer8"] // Round 3
];

const questions = [
  "Look, it's a ______",
  "Hey, it's _____",
  "Nope, it's ______"
];

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
  const [round, setRound] = useState(0); // Current round (0-indexed)
  const [inputBoxes, setInputBoxes] = useState<string[]>(Array(8).fill(''));
  const [revealedAnswers, setRevealedAnswers] = useState<boolean[]>(Array(8).fill(false));
  const [yourScore, setYourScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);

  useEffect(() => {
    const inputContainer = document.querySelector('.new-input-container');
    if (inputContainer) {
      inputContainer.classList.add('slide-up');
    }
  }, []);

  const handleAddClick = () => {
    const answerIndex = predefinedAnswers[round].findIndex(
      answer => answer.toLowerCase() === inputValue.toLowerCase()
    );

    if (answerIndex !== -1 && !revealedAnswers[answerIndex]) {
      const newInputBoxes = [...inputBoxes];
      const newRevealedAnswers = [...revealedAnswers];
      newInputBoxes[answerIndex] = predefinedAnswers[round][answerIndex];
      newRevealedAnswers[answerIndex] = true;
      setInputBoxes(newInputBoxes);
      setRevealedAnswers(newRevealedAnswers);

      // Update your score
      setYourScore(yourScore + 1);

      onAddClick();
    }
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
          {questions[round]}
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
          <button className="play-button skip-button" onClick={() => {/* Skip logic if needed */}}>
            Skip
          </button>
          <input
            type="text"
            className="new-input"
            value={inputValue}
            onChange={onInputChange}
          />
          <button className="play-button add-button" onClick={handleAddClick}>
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
                ROUND RESULT
                <p>Round {round + 1}</p>
                <div className="score-line">
                  <p>{yourScore}</p> 
                  <p>-</p>
                </div>
                <p>TOTAL: {yourScore}</p>
              </div>
              <button className="finish-button" onClick={onFinishClick}>
                Finish Game
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default GameplayView;







