import { SET_SNACKBARMESSAGE, START_LOADING, STOP_LOADING } from "./constants";

const initialState = {
  loading: false,
  snackbarMessage: {
    variant: "success",
    shortMessage: "Well done!",
    longMessage: "Article updated successfuly",
    layoutType: "dashboard",
    show: false,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, loading: true };
    case STOP_LOADING:
      return { ...state, loading: false };
    case SET_SNACKBARMESSAGE:
      return { ...state, snackbarMessage: action.payload };
    default:
      return state;
  }
};

export default reducer;
