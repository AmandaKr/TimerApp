import { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const timerId = setInterval(() => {
      if (running) {
        setTime((prevTime) => {
          return prevTime + 1;
        });
      }
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [running]);

  const hours = Math.floor(time / 3600);
  const totalSeconds = time % 3600;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return (
    <div className="timer">
      <div className="numbers">
        <span>
          {`${hours}`.padStart(2, "0")}:{`${minutes}`.padStart(2, "0")}:
          {`${seconds}`.padStart(2, "0")}
        </span>
      </div>
      <div className="buttons">
        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button>
        <button onClick={() => setTime(0)}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
