// const GITHUB_DATA = {
//   name: 'commit.committer.name',
//   email: 'commit.committer.email',
//   date: 'commit.committer.date',
//   message: 'commit.message',
//   avatar: 'author.avatar_url'
// };

export default class CommitCardList {
  constructor(container, cardTemplate) {
    this.container = container;
    this.cardTemplate = cardTemplate;
  }
  addCard(name, email, date, message, avatar) {
    const card = this.cardTemplate.createCommitCard(name, email, date, message, avatar);
    this.container.insertAdjacentHTML('afterbegin', card)
  }
  // render() {
  //   this.cardTemplate.forEach(card => {
  //     this.addCard(
  //       'commit.committer.name',
  //       'commit.committer.email',
  //       'commit.committer.date',
  //       'commit.message',
  //       'author.avatar_url'
  //     );
  //   });
  // }
}

//  Можно лучше: В качестве параметров передавайте не переменные, а объект
//  если вы в ходе развития проекта захотите добавить переменных, то вам придётся менять код во многих местах
