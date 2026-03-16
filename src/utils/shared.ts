import axios from 'axios';

export function convertMmToPt(value: number) {
  return (value * 72) / 25.4;
}

const api_url = import.meta.env.VITE_API_URL;
const port = import.meta.env.VITE_PORT;

const api = axios.create({
  baseURL: `${api_url}:${port}`,
});

export default api;