export const userReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: {
          name: action.payload,
          email: `${action.payload.toLowerCase()}@example.com`,
        },
      };
    default:
      return state;
  }
};
