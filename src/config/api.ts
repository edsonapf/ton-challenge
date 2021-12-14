import axios from 'axios';

require('dotenv').config();

const countApi = axios.create({
  baseURL: process.env.COUNTAPI_URL,
  timeout: 30000, // 30 seconds
});

export default countApi;
