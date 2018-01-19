import axios from 'axios';
import { getAccessToken } from './AuthService';

const BASE_URL = 'http://localhost:3333';

export {getImageData, getEditableImageData};

function getEditableImageData() {
  const url =BASE_URL+'/api/images';
  return axios.get(url, {headers: { Authorization: `Bearer ${getAccessToken()}` }}).then(response => response.data);
}

function getImageData() {
  const url =BASE_URL+'/api/images';
  return axios.get(url).then(response => response.data);
}
