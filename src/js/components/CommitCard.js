import date from '../utils/date'

export default class CommitCard {
  constructor() {}

  createCard(data) {
    const sliderItem = document.querySelector('#sliderItem').content;
    sliderItem.querySelector('.slider__date').textContent = date(data.commit.committer.date);
    sliderItem.querySelector('.slider__avatar').src = data.author.avatar_url;
    sliderItem.querySelector('.slider__author').textContent = data.commit.author.name;
    sliderItem.querySelector('.slider__email').textContent = data.commit.author.email;
    sliderItem.querySelector('.slider__paragraph').textContent = data.commit.message;
    return sliderItem.cloneNode(true);
  }
}
