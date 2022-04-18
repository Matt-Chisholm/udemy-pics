import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID bndt4l2tmaOrzQKgHT5-lKThVHWjV-eAHeqmbVGzP4E'
  }
});