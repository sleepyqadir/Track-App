import Axios from "axios";
import { _retrieveData } from "../Db/localStorage";

const instance = Axios.create({
  baseURL: "http://infinite-sands-01272.herokuapp.com/",
});

instance.interceptors.request.use(
  async (config) => {
    let token;
    await _retrieveData().then((data) => {
      token = data;
    });
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
