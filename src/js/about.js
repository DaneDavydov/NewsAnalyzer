import '../pages/about.css';
import 'flickity/dist/flickity.min.css';
import '../blocks/flickity-custom/flickity-custom.css';
import Flickity from 'flickity';
// import GithudApi from './modules/GithubApi';
import CommitCard from './components/CommitCard';
import CommitsCardList from './components/CommitCardList';

//карточка
const card = new CommitCard();

//место под карточки
const cardList = new CommitsCardList(document.querySelector(".slider__carousel"), card);

cardList.render();
