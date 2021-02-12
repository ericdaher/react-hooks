export const numberReducer = (state, action) => {
  switch (action.type) {
    case "numberAdd2":
      return { ...state, number: state.number + 2 };
    case "numberMultiply7":
      return { ...state, number: state.number * 7 };
    case "numberDivide5":
      return { ...state, number: state.number / 5 };
    case "numberParseInt":
      return { ...state, number: parseInt(state.number) };
    case "numberAddN":
      return { ...state, number: state.number + Number(action.payload) };
    default:
      return state;
  }
};
