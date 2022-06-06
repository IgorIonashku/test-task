import axios from "axios";

export const fetchData = axios.create({
    baseURL: 'https://dummyjson.com'
  });

