import jQuery from 'jquery';
import config from '../config';

export default class Pixabay {
  baseUrl = 'https://pixabay.com/api/';
  key = config.pixabayKey;

  search(query) {
    const url = `${this.baseUrl}?key=${this.key}&q=${query}`;

    return jQuery.get(url);
  }
}
