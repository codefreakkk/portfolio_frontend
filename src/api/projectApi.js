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
export const getProject = async (uid) => {
  const token = localStorage.getItem("token");

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

export const addLike = async (pid) => {
  const token = localStorage.getItem("token");

  return await axios
    .put(
      `${baseURL}/updateprojectlike/${pid}`,
      {},
      {
        headers: { Authorization: token },
      }
    )
    .then((res) => res)
    .catch((err) => err);
};

// update project
export const updateProjectById = async (payload) => {
  const token = localStorage.getItem("token");

  return await axios
    .put(`${baseURL}/updateprojectbyid`, payload, {
      headers: { Authorization: token },
    })
    .then((res) => res)
    .catch((err) => err);
};

export const deleteProjectById = async (pid) => {
  const token = localStorage.getItem("token");

  return await axios.delete(`${baseURL}/deleteprojectbyid/${pid}`, {
    headers: { Authorization: token },
  });
};
