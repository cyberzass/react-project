import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burgerbuilder-9748e.firebaseio.com/'
});

export default instance;
