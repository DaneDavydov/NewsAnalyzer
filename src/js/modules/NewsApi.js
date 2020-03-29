export default class NewsApi {
  constructor(url, apiKey, from, to){
    this._url = url;
    this._apiKey = apiKey;
    this._from = from;
    this._to = to;
  }

  getNews(query){
    let date = new Date();
    date.setDate(date.getDate() + this._from + 1); //возвращаем количество миллисекунд
    const from = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`; //преобразуем в нужный формат дату

    date = new Date();
    date.setDate(date.getDate() + this._to); //возвращаем количество миллисекунд
    const to = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;  //преобразуем в нужный формат дату

    return fetch(`${this._url}q=${query}&from=${from}&to=${to}&language=ru&pageSize=100&apiKey=${this._apiKey}`)
  }
}