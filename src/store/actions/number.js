export const numberAdd2 = (dispatch) => {
  dispatch({ type: "numberAdd2" });
};
export const numberMultiply7 = (dispatch) => {
  dispatch({ type: "numberMultiply7" });
};
export const numberDivide5 = (dispatch) => {
  dispatch({ type: "numberDivide5" });
};
export const numberParseInt = (dispatch) => {
  dispatch({ type: "numberParseInt" });
};
export const numberAddN = (dispatch, payload) => {
  dispatch({ type: "numberAddN", payload });
};
