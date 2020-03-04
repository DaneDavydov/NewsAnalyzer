import date from '../utils/date'

export default class NewsCard {
  constructor() {}

  createCard(data) {
    const newsCard = document.querySelector('#newsCard').content;
    newsCard.querySelector('.news-card__link').href = data.url;
    newsCard.querySelector('.news-card__image').src = data.urlToImage;
    newsCard.querySelector('.news-card__date').textContent = date(data.publishedAt);
    newsCard.querySelector('.news-card__title').textContent = data.title;
    newsCard.querySelector('.news-card__text').textContent = data.description;
    newsCard.querySelector('.news-card__source').textContent = data.source.name;
    return newsCard.cloneNode(true);
  }
}
