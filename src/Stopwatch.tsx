import React, { useState, useEffect } from 'react';

interface StopwatchProps {
  initialSeconds?: number;  // Allow customization of the initial time
  onTimeUp?: () => void;    // Callback when the timer reaches 0
}

const Stopwatch: React.FC<StopwatchProps> = ({
  initialSeconds = 20,      // Default to 20 seconds if not provided
  onTimeUp
}) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(prev => prev - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsRunning(false);
      if (onTimeUp) onTimeUp();  // Call the onTimeUp callback if provided
    }

    return () => clearInterval(interval);
  }, [isRunning, seconds, onTimeUp]);

  const formatTime = (seconds: number) => {
    return seconds.toString(); // Display only seconds
  };

  return (
    <div className="stopwatch">
      <div className="time-display">{formatTime(seconds)}</div>
    </div>
  );
};

export default Stopwatch;



