export default class CommitCardList {
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


// export default class CommitCardList {
//   constructor(container, api, cardTemplate) {
//     this.container = container;
//     this.api = api;
//     this.cardTemplate = cardTemplate;
//   }

//   addCard(...args) {
//     const cardMarkup = this.cardTemplate.createCard(...args);
//     this.container.append(cardMarkup);
//   }

//   render() {
//     this.api.forEach(card => {
//       this.addCard(
//         card.commit.committer.name,
//         card.commit.committer.email,
//         card.commit.author.date,
//         card.commit.message,
//         card.author.avatar_url
//       );
//     });
//   }
// }
