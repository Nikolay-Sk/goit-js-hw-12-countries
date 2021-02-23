import fetchCountries from './fetchCountries';
import 'lodash';
import PNotify from 'pnotify/dist/es/PNotify';
import refs from './refs';
import countrie from '../templates/countrie.hbs';
import countries from '../templates/countries.hbs';

refs.input.addEventListener('input', _.debounce(searchCountries, 500));

function searchCountries(e) {
  const searchValue = e.target.value;
  clearList();

  fetchCountries(searchValue).then(data => {
    if (data.length > 10) {
      PNotify.error({
        text: 'Too many matches found. Please enter a more specific query!',
      });
    } else if (data.length > 1) {
      const listCountries = countries(data);
      insertItem(listCountries);
    } else {
      const oneCountrie = countrie(data);
      insertItem(oneCountrie);
    }
  });
}

function insertItem(items) {
  refs.listItemCountrie.insertAdjacentHTML('beforeend', items);
}

function clearList() {
  refs.listItemCountrie.innerHTML = '';
}
