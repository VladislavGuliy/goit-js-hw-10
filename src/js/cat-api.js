import axios from 'axios';


// const catApi = axios.create({
//   baseURL: 'https://api.thecatapi.com/v1',
//   headers: {
//     'x-api-key':
//       'live_M0pIFaq2Ee9EjbJ7AbfsCesAjbqKbQSMCI9EnF5SMc6gON19e7GiU9ylgu3DpBVU',
//   },
// });

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] = 'live_M0pIFaq2Ee9EjbJ7AbfsCesAjbqKbQSMCI9EnF5SMc6gON19e7GiU9ylgu3DpBVU';

export async function fetchBreeds() {
  try {
    const resp = await axios
      .get('/breeds');
    return resp.data;
  } catch (error) {
    throw new Error(error.response.status);
  }
}

export async function fetchCatByBreed(breedId) {
  try {
    const resp = await axios
      .get(`/images/search?breed_ids=${breedId}`);
    return resp.data;
  } catch (error) {
    throw new Error(error.response.status);
  }
}
