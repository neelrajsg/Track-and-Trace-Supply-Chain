import axios from 'axios';

// Create an Axios instance with the base URL pointing to your backend server
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Change this to your backend URL if hosted online
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
