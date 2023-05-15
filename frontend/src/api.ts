// src/api.ts
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://your-backend-url.com/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getData = async () => {
  try {
    const response = await instance.get('/your-endpoint');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

