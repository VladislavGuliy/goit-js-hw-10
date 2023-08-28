import { fetchBreeds, fetchCatByBreed } from './cat-api';

import '../css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

const refs = {
  breedSelect: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};

refs.loader.classList.replace('loader', 'visually-hidden');
refs.error.classList.add('visually-hidden');
refs.catInfo.classList.add('visually-hidden');

fetchBreeds()
  .then(breeds => {
    refs.breedSelect.style.display = 'flex';

    const markup = breeds
      .map(breed => {
        return `<option value= "${breed.id}">${breed.name}</option>`;
      })
      .join('');

    refs.breedSelect.insertAdjacentHTML('beforeend', markup);

    new SlimSelect({
      select: refs.breedSelect,
    });
  })
  .catch(onErrorFetch);

refs.breedSelect.addEventListener('change', onSelectBreed);

function onSelectBreed(event) {
  const breedId = event.currentTarget.value;
  
  refs.loader.classList.replace('visually-hidden', 'loader');
  refs.breedSelect.classList.add('visually-hidden');
  refs.catInfo.classList.add('visually-hidden');

  
  fetchCatByBreed(breedId)
    .then(data => {
      const { url, breeds } = data[0];
      const markupCatInfo = `<img src="${url}" alt="${breeds[0].name}" width="500"/><div class="container"><h1 class="container__breed-name">${breeds[0].name}</h1><p>${breeds[0].description}</p><p><b>Temperament:&nbsp;</b> ${breeds[0].temperament}</p></div>`;


      refs.loader.classList.replace('loader', 'visually-hidden');
      refs.breedSelect.classList.remove('visually-hidden');
      refs.catInfo.innerHTML = '';

      refs.catInfo.insertAdjacentHTML('beforeend', markupCatInfo);
      refs.catInfo.classList.remove('visually-hidden');
    })
    .catch(onErrorFetch);
}

function onErrorFetch(error) {
  refs.breedSelect.classList.remove('visually-hidden');
  refs.loader.classList.replace('loader', 'visually-hidden');

  Notify.failure(
    `${refs.error.innerText}
    ${error}`,
    {
      position: 'center-center',
      timeout: 2000,
      width: '600px',
      fontSize: '24px',
    }
  );
}
