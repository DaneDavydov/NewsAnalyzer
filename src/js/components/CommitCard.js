export default class CommitCard {
  constructor() {}
  createCommitCard(name, email, date, message, avatar) {
    return `
      <div class="slider__item">
        <div class="slider__date">${date}</div>
        <div class="slider__content">
          <img class="slider__avatar" src="${avatar}" alt="аватар">
          <div class="slider__text">
            <h4 class="slider__author title">${name}</h4>
            <p class="slider__email">${email}</p>
          </div>
        </div>
        <p class="slider__paragraph">${message}</p>
      </div>
    `;
  }
}
