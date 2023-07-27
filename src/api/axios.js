import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default axios.create({
  baseURL: BASE_URL,
});

export const loginAxios = (payload) => {
  return axios.post(BASE_URL + "/users/login", payload, {
    headers: {
      "Access-Control-Allow-Origin": true,
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};

export const getBrands = () => {
  return axios.get(BASE_URL + "/brands", {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Access-Control-Allow-Origin": true,
      "Content-Type": "application/json",
    },
  });
};

export const getAllVehicles = () => {
  return axios.get(BASE_URL + "/vehicles", {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Access-Control-Allow-Origin": true,
      "Content-Type": "application/json",
    },
  });
};

export const addBrands = (payload) => {
  return axios.post(BASE_URL + "/brands", payload, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Access-Control-Allow-Origin": true,
      "Content-Type": "multipart/form-data",
    },
  });
};

export const addVehicles = (payload) => {
  return axios.post(BASE_URL + "/vehicle", payload, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Access-Control-Allow-Origin": true,
      "Content-Type": "multipart/form-data",
    },
  });
};

export const updateBrand = (id, payload) => {
  return axios.put(BASE_URL + "/brands/" + id, payload, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Access-Control-Allow-Origin": true,
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteBrand = (id) => {
  return axios.delete(BASE_URL + "/brands/" + id, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Access-Control-Allow-Origin": true,
      "Content-Type": "multipart/form-data",
    },
  });
};
