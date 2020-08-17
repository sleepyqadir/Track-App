import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
const trackReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_TRACKS":
      return action.payload;
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => {
  return async () => {
    const response = await trackerApi.get("/tracks");
    dispatch({
      type: "FETCH_TRACKS",
      payload: response.data,
    });
  };
};
const createTrack = (dispatch) => {
  return async (name, locations) => {
    try {
      await trackerApi.post("/tracks", {
        name,
        locations,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};

const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);

export { Provider, Context };
