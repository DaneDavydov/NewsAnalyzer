export default class NewsCardList {
  constructor(container) {
    this._container = container;
  }

  addCard(card) {
    this._container.append(card);
  }

  deleteCard() {
    [...this._container.children].forEach(item => item.remove());
  }
}

