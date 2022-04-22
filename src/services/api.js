import axios from "axios";

export const api = axios.create({
  baseURL: "http://api.openweathermap.org/data/2.5/",
});

export const app_key = "2d2cb4371aebf9d61b381194aaf80784";
