import axios from "axios";

//baseURL: 'https://leopinnheiro.github.io/dtmoney/api'

const isDevelopment = process.env.NODE_ENV !== 'production';

export const api = axios.create({
  baseURL: isDevelopment
    ? 'http://localhost:3000/dtmoney/api' 
    : 'https://leopinnheiro.github.io/dtmoney/api'
})