export default class NewsCardList {
  constructor(container){
    this._container = container;
  }

  addCard(newsCard) {
    this._container.appendChild(newsCard);
  }

  deleteCard() {
    [...this._container.children].forEach(newsCard => newsCard.remove());
  }
}

