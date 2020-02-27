import '../pages/about.css';
import 'flickity/dist/flickity.min.css';
import '../blocks/flickity-custom/flickity-custom.css';
import Flickity from 'flickity';
// import GithudApi from './modules/GithubApi';
// import CommitCard from './components/CommitCard';
// import CommitsCardList from './components/CommitCardList';


const apiUrl = 'https://api.github.com/repos/danedavydov/newsanalyzer/commits';

function createCommitCard(name, email, date, message, avatar) {
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

function addPostToDOM(container, markup) {
  container.insertAdjacentHTML('afterbegin', markup);
}

function getPosts() {
  // напишите код здесь
  fetch(apiUrl)
    .then(response => response.json())
    .then((cards) => {
      cards.forEach((card) => {
        addPostToDOM(document.querySelector('.slider__carousel'), createCommitCard(
          card.commit.committer.name,
          card.commit.committer.email,
          card.commit.committer.date,
          card.commit.message,
          card.author.avatar_url));
      });
    });
}

getPosts();
