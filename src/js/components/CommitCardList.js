import {NUMBER_OF_COMMITS} from '../constants/constants'

export default class CommitCardList {
  constructor(container, apiData, cardTemplate) {
    this._container = container;
    this._apiData = apiData;
    this._cardTemplate = cardTemplate;
  }

  addCard(data) {
    const card = this._cardTemplate.createCard(data);
    this._container.append(card);
  }

  render() {
    for (let i = 0; i < NUMBER_OF_COMMITS; i++) {
      this.addCard(this._apiData[i]);
    }
  }
}