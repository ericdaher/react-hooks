import React, { useReducer, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";

import { initialState, reducer } from "../../store/index";
import {
  numberAdd2,
  numberAddN,
  numberDivide5,
  numberMultiply7,
  numberParseInt,
  login,
} from "../../store/actions/index";

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [number, setNumber] = useState(0);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Another implementation of state in functional components"
      />
      <div className="center">
        {state.user ? (
          <span className="text">
            {state.user.name} - {state.user.email}
          </span>
        ) : (
          <span className="text">Please login</span>
        )}
        <span className="text">{state.number}</span>
        <div>
          <div>
            <button className="btn" onClick={() => login(dispatch, "Eric")}>
              Login
            </button>
          </div>

          <button className="btn" onClick={() => numberMultiply7(dispatch)}>
            *7
          </button>
          <button className="btn" onClick={() => numberDivide5(dispatch)}>
            /5
          </button>
          <button className="btn" onClick={() => numberParseInt(dispatch)}>
            int()
          </button>
          <button className="btn" onClick={() => numberAdd2(dispatch)}>
            +2
          </button>
          <div>
            <input
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="input"
            />
            <br></br>
            <button
              className="btn"
              onClick={() => numberAddN(dispatch, number)}
            >
              +n
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
