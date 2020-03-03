export default class CommitCard {
  constructor() {}

  createCard(data) {
    this.data = data;
    const sliderItem = document.querySelector('#sliderItem').content;
    sliderItem.querySelector('.slider__date').textContent = this.data.commit.committer.date;
    sliderItem.querySelector('.slider__avatar').src = this.data.author.avatar_url;
    sliderItem.querySelector('.slider__author').textContent = this.data.commit.author.name;
    sliderItem.querySelector('.slider__email').textContent = this.data.commit.author.email;
    sliderItem.querySelector('.slider__paragraph').textContent = this.data.commit.message;
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
