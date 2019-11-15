import axios from 'axios';
import { getAccessToken } from './AuthService';

const BASE_URL = 'https://api.mlab.com/api/1/databases/rainbow/collections/images?apiKey=1W1tqvCxoGyGvyM0tDQ2AipLCiFzEAS5';

export {getImageData, deleteData, postImageData};

function deleteData(i) {
  return axios.delete('https://api.mlab.com/api/1/databases/rainbow/collections/images/' + i + '?apiKey=1W1tqvCxoGyGvyM0tDQ2AipLCiFzEAS5')
  .then(res => {
    console.log('Image deleted');
    console.log(i)
  })
  .catch(err => {
    console.error(err);
  });
}

function getImageData() {
  const url =BASE_URL;
  return axios.get(url).then(response => response.data);
}

function postImageData() {
  const url =BASE_URL;
  return axios.post(BASE_URL).then(response => response.data);
}
