import Axios from 'axios';

export const Http = Axios.create({
  baseURL: 'https://mec-chess-api.herokuapp.com/api/v1/',
  // baseURL: 'http://localhost:8000/api/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
});
