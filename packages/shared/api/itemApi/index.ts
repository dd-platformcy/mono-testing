import axios from 'axios';

// example

interface ApiCallbacks {
  successCallback?: Function;
  errorCallback?: Function;
}

export function getComments(cb: ApiCallbacks): void {
  return getApi('https://jsonplaceholder.typicode.com/comments', cb);
}

export function getPhotos(cb: ApiCallbacks): void {
  return getApi('https://jsonplaceholder.typicode.com/photos', cb);
}

export function getNavigationItems(cb: ApiCallbacks): void {
  return getApi('https://next.json-generator.com/api/json/get/VJ2zrfDdc', cb);
}

const getApi = (url: string, cb: ApiCallbacks) => {
  axios
    .get(url)
    .then(data => {
      if (cb.successCallback != null) {
        return cb.successCallback(data);
      }
      return data;
    })
    .catch(error => {
      if (cb.errorCallback != null) {
        return cb.errorCallback(error);
      }
      return error;
    });
};
