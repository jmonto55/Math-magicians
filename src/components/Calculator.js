import React from 'react';
// import calculate from '../logic/calculate';

function Calculator() {
  return (
    <div className="main_container">
      <div className="grid_wrapper">
        <div className="total" type="button">
          0
        </div>
        <button className="ac" type="button">AC</button>
        <button className="plus-minus" type="button">+/-</button>
        <button className="percent" type="button">%</button>
        <button className="divide" type="button">/</button>
        <button className="seven" type="button">7</button>
        <button className="eight" type="button">8</button>
        <button className="nine" type="button">9</button>
        <button className="multiply" type="button">*</button>
        <button className="four" type="button">4</button>
        <button className="five" type="button">5</button>
        <button className="six" type="button">6</button>
        <button className="minus" type="button">-</button>
        <button className="one" type="button">1</button>
        <button className="two" type="button">2</button>
        <button className="three" type="button">3</button>
        <button className="plus" type="button">+</button>
        <button className="zero" type="button">0</button>
        <button className="point" type="button">.</button>
        <button className="equal" type="button">=</button>
      </div>
    </div>
  );
}

export default Calculator;
