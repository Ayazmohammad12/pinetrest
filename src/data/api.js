import axios from "axios";

const API = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID xTtIDEFyiJB9rWOoo8N0C7V-Pd25ozylCtWjPMZE3uE",
  },
});

export default API;