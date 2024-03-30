import axios from "axios";

let token = localStorage.getItem("x-access-token");
const axiosPrivateUrl = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
  headers: {
    "x-access-token": `${token}`,
  },
});

const UseAxiosPrivate = () => {
  return { axiosPrivateUrl };
};

export default UseAxiosPrivate;
