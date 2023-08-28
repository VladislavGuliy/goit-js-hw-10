import axios from 'axios';

const catApi = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  headers: {
    'x-api-key':
      'live_M0pIFaq2Ee9EjbJ7AbfsCesAjbqKbQSMCI9EnF5SMc6gON19e7GiU9ylgu3DpBVU',
  },
});

export function fetchBreeds() {
  return catApi
    .get('/breeds')
    .then(resp => {
      return resp.data;
    })
    .catch(error => {
      throw new Error(error.message);
    });
}

export function fetchCatByBreed(breedId) {
  return catApi
    .get(`/images/search?breed_ids=${breedId}`)
    .then(resp => {
      return resp.data;
    })
    .catch(error => {
      throw new Error(error.response.status);
    });
}
