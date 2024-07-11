// src/CalculationForm.js
import React, { useState } from "react";

const CalculationForm = () => {
  const [a1, setA1] = useState(10);
  const [a2, setA2] = useState(13);
  const [d, setD] = useState(10);
  const [m, setM] = useState(10);
  const [x, setX] = useState(1);
  const [y, setY] = useState(7);
  const [t1, setT1] = useState(null);
  const [t2, setT2] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const c = Math.sqrt((x ** 2) + (y ** 2));
    const eVal = Math.sqrt(((d - x) ** 2) + (y ** 2));

    const t1Calc = Math.atan(y / x) + Math.acos(((a1 ** 2) + (c ** 2) - (a2 ** 2)) / (2 * a1 * c));
    const t2Calc = Math.atan(y / (d - x)) + Math.acos(((a1 ** 2) + (eVal ** 2) - (a2 ** 2)) / (2 * a1 * eVal));

    setT1((t1Calc * 180) / Math.PI);
    setT2(180 - (t2Calc * 180) / Math.PI);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            a1:
            <input type="number" value={a1} onChange={(e) => setA1(parseFloat(e.target.value))} />
          </label>
        </div>
        <div className="form-group">
          <label>
            a2:
            <input type="number" value={a2} onChange={(e) => setA2(parseFloat(e.target.value))} />
          </label>
        </div>
        <div className="form-group">
          <label>
            d:
            <input type="number" value={d} onChange={(e) => setD(parseFloat(e.target.value))} />
          </label>
        </div>
        <div className="form-group">
          <label>
            m:
            <input type="number" value={m} onChange={(e) => setM(parseFloat(e.target.value))} />
          </label>
        </div>
        <div className="form-group">
          <label>
            x:
            <input type="number" value={x} onChange={(e) => setX(parseFloat(e.target.value))} />
          </label>
        </div>
        <div className="form-group">
          <label>
            y:
            <input type="number" value={y} onChange={(e) => setY(parseFloat(e.target.value))} />
          </label>
        </div>
        <button type="submit">Calculate</button>
      </form>
      {t1 !== null && <div className="result">t1: {t1.toFixed(2)} degrees</div>}
      {t2 !== null && <div className="result">t2: {t2.toFixed(2)} degrees</div>}
    </div>
  );
};

export default CalculationForm;
