import axios from "axios";

const API_BASE = "http://localhost:5000/api";

export const registerUser = async (data) => {
  const res = await axios.post(`${API_BASE}/register`, data);
  return res.data;
};
