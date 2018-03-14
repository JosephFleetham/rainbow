import axios from 'axios';
import { getAccessToken } from './AuthService';

const BASE_URL = 'https://api.mlab.com/api/1/databases/rainbow/collections/images?apiKey=1W1tqvCxoGyGvyM0tDQ2AipLCiFzEAS5';

export {getImageData, deleteData};

function deleteData() {
  return axios.delete(BASE_URL) //trying to delete 1 nested item from server instead of entire item REDUX??
  .then(response =>
    response.json().then(json => {
      return json;
    })
  );
}

function getImageData() {
  const url =BASE_URL;
  return axios.get(url).then(response => response.data);
}
