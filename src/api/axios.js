import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://readjourney.b.goit.study/api-docs/',
});
export default instance;
