import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://us-central1-game-commerce-89714.cloudfunctions.net/api",
  //"http://localhost:5001/game-commerce-89714/us-central1/api",
});

export default instance;
