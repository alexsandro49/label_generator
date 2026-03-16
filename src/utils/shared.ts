import axios from 'axios';

export function convertMmToPt(value: number) {
  return (value * 72) / 25.4;
}

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000',
});

export default api;