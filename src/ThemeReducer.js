const reducer = (state, action) => {
  switch (action.type) {
    case "light": {
      return "light";
    }
    case "dark": {
      return "dark";
    }
    default: {
      return state;
    }
  }
};

export default reducer;
