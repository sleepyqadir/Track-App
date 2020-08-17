import tracker from "../api/tracker";
import { _storeData, _retrieveData, _clearData } from "../Db/localStorage";
import createDataContext from "./createDataContext";
import { CommonActions } from "@react-navigation/native";
const authReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { errorMessgage: "", token: action.payload };
    case "SIGN_UP":
      return { errorMessgage: "", token: action.payload };
    case "ERROR_MESSAGE":
      return { ...state, errorMessgage: action.payload };
    case "SIGN_OUT":
      return { ...state, token: null };
    default:
      break;
  }
};

const trysignin = (dispatch) => {
  return (navigation) => {
    _retrieveData().then((data) => {
      const token = data;
      if (token) {
        dispatch({
          type: "SIGN_IN",
          payload: token,
        });
      } else {
        navigation.dispatch(
          CommonActions.navigate({
            name: "signin",
            params: {},
          })
        );
      }
    });
  };
};

const signin = (dispatch) => {
  return async ({ email, password }) => {
    try {
      console.log("here");
      const response = await tracker.post("/signin", { email, password });
      console.log("here2");
      await _storeData(response.data.token);
      dispatch({
        type: "SIGN_IN",
        payload: response.data.token,
      });
    } catch (error) {
      const errorMessgage = error.response.data;
      dispatch({
        type: "ERROR_MESSAGE",
        payload: errorMessgage.error,
      });
    }
  };
};
const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      console.log("here");
      const response = await tracker.post("/signup", { email, password });
      console.log("here2");
      await _storeData(response.data.token);
      dispatch({
        type: "SIGN_UP",
        payload: response.data.token,
      });
    } catch (error) {
      const errorMessgage = error.response.data;
      dispatch({
        type: "ERROR_MESSAGE",
        payload: errorMessgage.error,
      });
    }
  };
};
const signout = (dispatch) => {
  return async () => {
    await _clearData();
    dispatch({
      type: "SIGN_OUT",
    });
  };
};

const clearErrorMessage = (dispatch) => {
  return () => {
    dispatch({
      type: "ERROR_MESSAGE",
      payload: "",
    });
  };
};

const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signup, signout, clearErrorMessage, trysignin },
  {
    token: null,
    errorMessgage: "",
  }
);

export { Provider, Context };
