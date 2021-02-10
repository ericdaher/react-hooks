import React, { useEffect, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const calcFactorial = (n) => {
  const num = parseInt(n);
  if (num < 0) return -1;
  if (num === 0) return 1;
  return calcFactorial(num - 1) * num;
};

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [factorial, setFactorial] = useState(1);
  const [status, setStatus] = useState("Even");

  useEffect(() => setFactorial(calcFactorial(number)), [number]);
  useEffect(() => setStatus(number % 2 ? "Odd" : "Even"), [number]);

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Side effects in functional components!"
      />
      <SectionTitle title="Exercise 01"></SectionTitle>
      <div className="center">
        <div>
          <span className="text">Factorial:</span>
          <span className="text red">
            {factorial < 0 ? "Não existe" : factorial}
          </span>
        </div>
        <input
          type="number"
          className="input"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <SectionTitle title="Exercise 02"></SectionTitle>
      <div className="center">
        <div>
          <span className="text">Odd or Even?</span>
          <span className="text red">{status}</span>
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
