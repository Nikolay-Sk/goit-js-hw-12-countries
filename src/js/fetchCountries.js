import PNotify from 'pnotify/dist/es/PNotify';

function fetchCountries(searchQuery) {
  const url = 'https://restcountries.eu/rest/v2/name/';
  const dataInput = searchQuery;

  return fetch(url + dataInput).then(response =>
    response.ok
      ? response.json()
      : Promise.reject(
          PNotify.error({
            text: 'Not found',
          }),
        ),
  );
}
export default fetchCountries;
