import axios from "axios";
import Axios from "axios";

export abstract class Config {
  static giphyAPIKey: string = "6ywsCkhiGFCVGMMF4wM0HAMgaoXKjy3Q";
  static giphyBaseURL: string = "https://api.giphy.com/v1/";
}

// AXIOS initialization
export const http = axios.create({
  baseURL: Config.giphyBaseURL,
  params: {
    api_key: Config.giphyAPIKey,
  },
});
