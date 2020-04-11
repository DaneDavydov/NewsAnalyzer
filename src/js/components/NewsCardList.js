export default class NewsCardList {
  constructor(container, cardTemplate) {
    this._container = container;
    this._cardTemplate = cardTemplate;
  }

  addCard(data) {
    const card = this._cardTemplate.createCard(data);
    this._container.append(card);
  }

  deleteCard() {
    [...this._container.children].forEach(item => item.remove());
  }
}

