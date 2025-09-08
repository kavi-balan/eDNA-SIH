import axios from "axios";

const API_BASE_URL = "http://localhost:5000"; // Replace with your backend URL

export const uploadFile = (file) => {
  const formData = new FormData();
  formData.append("edna_file", file);
  return axios.post(`${API_BASE_URL}/upload`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const checkJobStatus = (jobId) =>
  axios.get(`${API_BASE_URL}/job-status/${jobId}`);

export const fetchResults = (jobId) =>
  axios.get(`${API_BASE_URL}/results/${jobId}`);
