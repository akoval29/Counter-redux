const initialState = { value: 10 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        value: state.value + 1,
      };

    case "DEC":
      return {
        ...state,
        value: state.value - 1,
      };

    case "RDM":
      return {
        ...state,
        value: action.payload,
      };

    case "RST":
      return {
        ...state,
        value: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
