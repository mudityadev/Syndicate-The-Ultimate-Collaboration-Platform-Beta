import axios from 'axios';

const API_BASE_URL = 'http://localhost:1337/api'; // Replace with your Strapi URL

const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;
