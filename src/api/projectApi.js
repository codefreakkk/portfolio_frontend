import axios from "axios";
import { baseURL } from "./config";

export const addProject = async (payload) => {
  const token = localStorage.getItem("token");

  return await axios
    .post(`${baseURL}/addproject`, payload, {
      headers: { Authorization: token },
    })
    .then((res) => res)
    .catch((err) => err);
};

// get all projects of user
export const getProject = async () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  return await axios
    .get(`${baseURL}/getallprojectsbyid/${uid}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => res)
    .catch((err) => err);
};

// pagination
export const getProjectPagination = async (page) => {
  const token = localStorage.getItem("token");

  return await axios
    .get(`${baseURL}/getallprojectbyid-pagination/${page}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => res)
    .catch((err) => err);
};

// get one project by uid and pid
export const getProjectByIdAndPid = async ({ uid, pid }) => {
  const token = localStorage.getItem("token");

  return await axios
    .get(`${baseURL}/getprojectbyid/${uid}/${pid}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => res)
    .catch((err) => err);
};
