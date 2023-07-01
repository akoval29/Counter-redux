// reducer

const initialValue = { value: 10 };

export const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case "INC":
      return { ...state, value: state.value + 1 };
    case "DEC":
      return { ...state, value: state.value - 1 };
    case "RST":
      return { ...state, value: action.payload };
    case "RDM":
      return { ...state, value: action.payload };
    default:
      return state;
  }
};
