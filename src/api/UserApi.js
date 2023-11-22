import axios from "axios";
import { baseURL } from "./config";

// fetch user by id API
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

// fetch user account details
export const getUserAccountDetails = async () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  return await axios
    .get(`${baseURL}/getaccountdetailsbyid/${uid}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => res)
    .catch((err) => err);
};

// update personal details API
export const addPersonalDetails = async ({
  full_name,
  u_email,
  u_contact,
  u_description,
  u_company_name,
  u_work_experience,
  u_city,
  u_country,
  leetcode,
  gfg,
  linkedin,
  skillsArray,
}) => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");
  return await axios
    .put(
      `${baseURL}/updatepersonaldetailsbyid/${uid}`,
      {
        full_name,
        u_email,
        u_contact,
        u_description,
        u_company_name,
        u_work_experience,
        u_city,
        u_country,
        leetcode,
        gfg,
        linkedin,
        skillsArray,
      },
      { headers: { Authorization: token } }
    )
    .then((res) => {
      return res;
    })
    .catch((err) => err);
};

// update account details
export const updateAccountDetails = async ({ u_name, u_password }) => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  return await axios
    .put(
      `${baseURL}/updateaccountdetailsbyid/${uid}`,
      { u_name, u_password },
      { headers: { Authorization: token } }
    )
    .then((res) => {
      return res;
    })
    .catch((err) => err);
};

// signup API
export const signUp = async (payload) => {
  return await axios
    .post(`${baseURL}/signup`, payload)
    .then((res) => res)
    .catch((err) => err);
};
