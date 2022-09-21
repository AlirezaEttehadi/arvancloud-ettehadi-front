import { SET_SNACKBARMESSAGE, START_LOADING, STOP_LOADING } from "./constants";

// loading
export const startLoading = () => {
  return {
    type: START_LOADING,
  };
};
export const stopLoading = () => {
  return {
    type: STOP_LOADING,
  };
};
// snackbar
export const setSnackbarMessage = (data) => {
  return {
    type: SET_SNACKBARMESSAGE,
    payload: data,
  };
};
