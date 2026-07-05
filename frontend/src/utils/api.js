import axios from "axios";

const api = axios.create({
  baseURL: "https://locallink-c4lr.onrender.com/api",
});

// Attach token on every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
