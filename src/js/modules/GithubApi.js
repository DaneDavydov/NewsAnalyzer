export default class GithubApi {
  constructor(url) {
    this._url = url;
  }

  getCommits() {
    return fetch(`${this._url}`)
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
