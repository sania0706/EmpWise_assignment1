
import axios from 'axios';

export const loginUser = (email, password) => {
  return axios.post('https://reqres.in/api/login', {
    email,
    password
  });
};
