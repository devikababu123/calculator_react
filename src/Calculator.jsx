import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setDisplay(eval(display));
      } catch (error) {
        setDisplay('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
      
    } 
    else if (value === 'B') {
        setInput(input.slice(0, -1));
    }
    else {
      setDisplay(display + value);
    }
  };

  return (
    <>
    <div className='calculatorbg'>
    <div className="calculator">
      <input type="text" value={display} readOnly />
      <div className="keypad">
        <button onClick={() => handleClick('B')}><i className="fa-solid fa-delete-left"></i></button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick('=')}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('C')}>C</button>
      </div>
    </div>
    </div>
    </>
  );
};

export default Calculator;
