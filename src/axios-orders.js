import axios from 'axios';

const instance = axios.create({
  baseURL: "https://burger-blast.firebaseio.com/",
});

export default instance;