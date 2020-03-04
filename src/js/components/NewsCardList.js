export default class NewsCardList {
  constructor(container, apiData, cardTemplate) {
    this._container = container;
    this._apiData = apiData;
    this._cardTemplate = cardTemplate;
  }

  _addCard(data) {
    const card = this._cardTemplate.createCard(data);
    this._container.append(card);
  }

  render() {
    for (let i = 0; i < 20; i++) {
      this._addCard(this._apiData[i]);
    }
  }
}
