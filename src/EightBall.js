import React, { useState } from 'react';
import './App.css';

const EightBall = ({ answers }) => {
  const [message, setMessage] = useState('Think of a Question');
  const [color, setColor] = useState('black');

  const handleClick = () => {
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    setMessage(randomAnswer.msg);
    setColor(randomAnswer.color);
  };

  const handleReset = () => {
    setMessage('Think of a Question');
    setColor('black');
  };

  return (
    <div>
    <div
      className="eight-ball"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      {message}
      
    </div>
    <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default EightBall;

