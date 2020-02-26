import '../pages/about.css';
import 'flickity/dist/flickity.min.css';
import '../blocks/flickity-custom/flickity-custom.css';
import Flickity from 'flickity';
import GithudApi from './modules/GithubApi';
import CommitsCard from './components/CommitCard';
import CommitsCardList from './components/CommitCardList';

//api
const api = new Api({
  url: '',
  headers: {
      authorization: '',
      'Content-Type': 'application/json'
  }
});

//карточка
const card = new CommitsCard();

//место под карточки
const cardList = new CommitsCardList(document.querySelector(".flickity-slider"), card, api);
