import {date} from '../utils/date'

export default class NewsCard {
  createCard(data) {
    const newsCard = document.createElement('div');
    newsCard.classList.add('news-card');

    const link = document.createElement('a');
    link.classList.add('news-card__link', 'link');
    link.href = data.url;
    link.target = '_blank';
    newsCard.appendChild(link);

    const img = document.createElement('img');
    img.classList.add('news-card__image');
    img.src = data.urlToImage;
    img.alt = 'иллюстрация к новости';
    img.onerror = function () {
      img.src = './images/not-found_v1.png'; // Ошибка загрузки
    };
    link.appendChild(img);

    const description = document.createElement('div');
    description.classList.add('news-card__description');
    link.appendChild(description);

    const newsCardDate = document.createElement('div');
    newsCardDate.classList.add('news-card__date');
    newsCardDate.textContent = date(data.publishedAt);
    description.appendChild(newsCardDate);

    const title = document.createElement('h3');
    title.classList.add('title', 'news-card__title');
    title.textContent = data.title;
    description.appendChild(title);

    const text = document.createElement('p');
    text.classList.add('news-card__text');
    text.textContent = data.description;
    description.appendChild(text);

    const source = document.createElement('p');
    source.classList.add('news-card__source');
    source.textContent = data.source.name;
    description.appendChild(source);

    return newsCard;
  }
}

// export default class NewsCard {
//   constructor() {
//     // this.element = this.createCard(data);
//   }
//
//   createCard(data) {
//     const newsCard = document.querySelector('#newsCard').content;
//     newsCard.querySelector('.news-card__link').href = data.url;
//     newsCard.querySelector('.news-card__image').src = data.urlToImage;
//     newsCard.querySelector('.news-card__date').textContent = date(data.publishedAt);
//     newsCard.querySelector('.news-card__title').textContent = data.title;
//     newsCard.querySelector('.news-card__text').textContent = data.description;
//     newsCard.querySelector('.news-card__source').textContent = data.source.name;
//     return newsCard.cloneNode(true);
//   }
// }