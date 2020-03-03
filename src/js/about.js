import '../pages/about.css';
import 'flickity/dist/flickity.min.css';
import '../blocks/flickity-custom/flickity-custom.css';
import Flickity from 'flickity';
import GithubApi from './modules/GithubApi';
import CommitCard from './components/CommitCard';
import CommitCardList from './components/CommitCardList';
import {
  GIT_REPO_URL
} from './constants/constants';

const githubApi = new GithubApi(GIT_REPO_URL);
const commitCard = new CommitCard();
const sliderCarousel = document.querySelector('.slider__carousel');

githubApi.getCommits()
  .then(data => {
    const commitCardList = new CommitCardList(sliderCarousel, data, commitCard);
    commitCardList.render();
    var flkty = new Flickity('.slider__carousel', {
      cellAlign: 'center',
      contain: true,
      freeScroll: true,
      wrapAround: true,
    })
  })
  .catch((err) => {
    console.log(err);
  });
