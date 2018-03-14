import axios from 'axios';
import { getAccessToken } from './AuthService';

const BASE_URL = 'https://rainbow-gallery.herokuapp.com';

export {getImageData, deleteData};

function deleteData() {
  return axios.delete(BASE_URL + '/api/images') //trying to delete 1 nested item from server instead of entire item REDUX??
  .then(response =>
    response.json().then(json => {
      return json;
    })
  );
}

function getImageData() {
  const url =BASE_URL+'/api/images';
  return axios.get(url).then(response => response.data);
}
