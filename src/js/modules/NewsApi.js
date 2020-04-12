import {queryDate} from '../utils/date';
import {REQUEST_DEPTH} from '../constants/constants'

export default class NewsApi {
  constructor(url, apiKey) {
    this._url = url;
    this._apiKey = apiKey;
  }

  getNews(query) {
    let date = new Date();
    date.setDate(date.getDate() - REQUEST_DEPTH);
    const from = queryDate(date);

    date = new Date();
    date.setDate(date.getDate());
    const to = queryDate(date);

    return fetch(`${this._url}q=${query}&from=${from}&to=${to}&language=ru&pageSize=100&apiKey=${this._apiKey}`)
  }
}