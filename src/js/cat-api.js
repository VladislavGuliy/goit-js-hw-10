// import axios from 'axios';
// const axios = require('axios').default;

// const catApi = axios.create({
//   baseURL: 'https://api.thecatapi.com/v1',
//   headers: {
//     'x-api-key':
//       'live_M0pIFaq2Ee9EjbJ7AbfsCesAjbqKbQSMCI9EnF5SMc6gON19e7GiU9ylgu3DpBVU',
//   },
// });

// axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
// axios.defaults.headers.common['x-api-key'] = 'live_M0pIFaq2Ee9EjbJ7AbfsCesAjbqKbQSMCI9EnF5SMc6gON19e7GiU9ylgu3DpBVU';

// export function fetchBreeds() {
//   return axios
//     .get('/breeds')
//     .then(response => {
//       console.log(response.data);
//       return response.data;
//     })
//     .catch(error => {
//       throw new Error(error.response.status);
//     });
// }
// export function fetchCatByBreed(breedId) {
//   return axios
//     .get(`/images/search?breed_ids=${breedId}`)
//     .then(response => {
//       return response.data;
//     })
//     .catch(error => {
//       throw new Error(error.response.status);
//     });
// }

const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_M0pIFaq2Ee9EjbJ7AbfsCesAjbqKbQSMCI9EnF5SMc6gON19e7GiU9ylgu3DpBVU';

export function fetchBreeds() {
  return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
