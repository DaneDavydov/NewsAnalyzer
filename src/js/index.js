import '../pages/index.css';
import NewsCard from '../js/components/NewsCard';
import NewsCardList from '../js/components/NewsCardList';
import NewsApi from '../js/modules/NewsApi';
import {NEWS_API_URL, NEWS_API_KEY} from '../js/constants/constants'

const newsApi = new NewsApi(NEWS_API_URL, NEWS_API_KEY);
const newsCard = new NewsCard();
const searchResultsList = document.querySelector('.search-results__list');

newsApi.getNews('тест', '2020-03-04', '2020-03-04')
  .then(data => {
    const newsCardList = new NewsCardList(searchResultsList, data.articles, newsCard);
    newsCardList.render();
  })
  .catch((err) => {
    console.log(err);
  });
