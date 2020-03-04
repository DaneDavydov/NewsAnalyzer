import dateGit from '../utils/date'

export default class CommitCard {
  constructor() {}

  createCard(data) {
    const sliderItem = document.querySelector('#sliderItem').content;
    sliderItem.querySelector('.slider__date').textContent = dateGit(data.commit.committer.date);
    sliderItem.querySelector('.slider__avatar').src = data.author.avatar_url;
    sliderItem.querySelector('.slider__author').textContent = data.commit.author.name;
    sliderItem.querySelector('.slider__email').textContent = data.commit.author.email;
    sliderItem.querySelector('.slider__paragraph').textContent = data.commit.message;
    return sliderItem.cloneNode(true);
  }
}

// export default class CommitCard {
//   constructor() {}

//   createCard(name, email, date, message, avatar) {
//     const sliderItem = document.querySelector('#sliderItem').content;
//     sliderItem.querySelector('.slider__date').textContent = date;
//     sliderItem.querySelector('.slider__avatar').src = avatar;
//     sliderItem.querySelector('.slider__author').textContent = name;
//     sliderItem.querySelector('.slider__email').textContent = email;
//     sliderItem.querySelector('.slider__paragraph').textContent = message;
//     return sliderItem.cloneNode(true);
//   }
// }
