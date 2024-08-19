import axios from "axios";

const api = axios.create({
  baseURL: "https://a1a9-116-126-106-99.ngrok-free.app/",
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "69420",
  },
});

export default api;
