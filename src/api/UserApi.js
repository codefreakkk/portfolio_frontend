import axios from "axios";
import { baseURL } from "./config";

export const getUser = async () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  return await axios
    .get(`${baseURL}/getuserbyid/${uid}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => err);
};

export const getProject = async () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  return await axios
    .get(`${baseURL}/getallprojectsbyid/${uid}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => err);
};
