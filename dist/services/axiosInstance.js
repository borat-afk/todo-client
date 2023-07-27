import axios from 'axios';
import { config } from 'dotenv';
config();
const axiosInstance = axios.create({
    baseURL: process.env.BASE_URL,
});
export default axiosInstance;
