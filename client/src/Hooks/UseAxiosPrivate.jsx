import axios from "axios";

const axiosPrivateUrl = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
  headers: {
    "x-access-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDYzZTIxMjA3MGI0NmRhOTg5YzJiOSIsInJvbGVzIjpbIlN5c3RlbSBBZG1pbiJdLCJpYXQiOjE3MTE2ODg0NTQsImV4cCI6MTcxMTY5MjA1NH0.G8kxfj9VVswXvRKZdmpresRYgobP2x8Af5S-O6Kkesk",
  },
});

const UseAxiosPrivate = () => {
  return { axiosPrivateUrl };
};

export default UseAxiosPrivate;
