import React, { useEffect, useRef, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const mergeInputs = (s1, s2) => {
  let mergedInput = "";
  let i = 0;
  while (i < s1.length || i < s2.length) {
    if (i < s1.length) mergedInput += s1[i];
    if (i < s2.length) mergedInput += s2[i];
    i++;
  }

  return mergedInput;
};

const UseRef = (props) => {
  const [v1, setV1] = useState("");
  const [v2, setV2] = useState("");
  const count = useRef(0);
  const inputField1 = useRef(null);
  const inputField2 = useRef(null);

  useEffect(() => {
    count.current++;
    inputField2.current.focus();
  }, [v1]);
  useEffect(() => {
    count.current++;
    inputField1.current.focus();
  }, [v2]);

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Returns a mutable object with property .current!"
      />
      <SectionTitle title="Exercise 01"></SectionTitle>
      <div className="center">
        <div>
          <span className="text">Valor:</span>
          <span className="text">{mergeInputs(v1, v2)} [</span>
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>
        <input
          type="text"
          className="text"
          value={v1}
          ref={inputField1}
          onChange={(e) => setV1(e.target.value)}
        />
      </div>
      <SectionTitle title="Exercise 02"></SectionTitle>
      <div className="center">
        <input
          type="text"
          className="text"
          value={v2}
          ref={inputField2}
          onChange={(e) => setV2(e.target.value)}
        />
      </div>
    </div>
  );
};

export default UseRef;
