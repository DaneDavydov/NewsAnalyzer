export default class NewsApi {
  constructor(url, apiKey) {
    this._url = url;
    this._apiKey = apiKey
  }
  getNews(query, from, to) {
    return fetch(`${this._url}q=${query}&from${from}&to${to}&pageSize=100&apiKey=${this._apiKey}`)
      .then((res) => {
        if (res.ok) {
          return res.json(); // возвращаем вызов метода json
        }
        // иначе отклоняем промис, чтобы перейти в catch
        return Promise.reject(res.status);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
        // выведет в консоль сообщение: `Ошибка: ${err}`
      })
  }
}
