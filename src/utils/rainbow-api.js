import axios from 'axios';

const BASE_URL = 'http://localhost:3333';

export {getImageData};

function getImageData() {
  const url =BASE_URL+'/api/images';
  return axios.get(url).then(response => response.data);
}
