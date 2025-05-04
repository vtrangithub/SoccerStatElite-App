const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://v3.football.api-sports.io/";

const headers = {
  "x-rapidapi-key": API_KEY,
  "x-rapidapi-host": "v3.football.api-sports.io",
};

export { BASE_URL, headers };
