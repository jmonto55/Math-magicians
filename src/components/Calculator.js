import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [obj, setObj] = useState({
    total: 0,
  });

  const onClickHandler = (e) => {
    const name = e.target;
    setObj(calculate(obj, name.innerText));
  };

  const { total, operation, next } = obj;

  return (
    <div className="main_container">
      <div className="grid_wrapper">
        <div className="total" type="button">
          { total }
          { operation }
          { next }
        </div>
        <button className="ac" type="button" onClick={onClickHandler}>AC</button>
        <button className="plus-minus" type="button" onClick={onClickHandler}>+/-</button>
        <button className="percent" type="button" onClick={onClickHandler}>%</button>
        <button className="divide" type="button" onClick={onClickHandler}>÷</button>
        <button className="seven" type="button" onClick={onClickHandler}>7</button>
        <button className="eight" type="button" onClick={onClickHandler}>8</button>
        <button className="nine" type="button" onClick={onClickHandler}>9</button>
        <button className="multiply" type="button" onClick={onClickHandler}>x</button>
        <button className="four" type="button" onClick={onClickHandler}>4</button>
        <button className="five" type="button" onClick={onClickHandler}>5</button>
        <button className="six" type="button" onClick={onClickHandler}>6</button>
        <button className="minus" type="button" onClick={onClickHandler}>-</button>
        <button className="one" type="button" onClick={onClickHandler}>1</button>
        <button className="two" type="button" onClick={onClickHandler}>2</button>
        <button className="three" type="button" onClick={onClickHandler}>3</button>
        <button className="plus" type="button" onClick={onClickHandler}>+</button>
        <button className="zero" type="button" onClick={onClickHandler}>0</button>
        <button className="point" type="button" onClick={onClickHandler}>.</button>
        <button className="equal" type="button" onClick={onClickHandler}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
