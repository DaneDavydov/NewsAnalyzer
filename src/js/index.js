import '../pages/index.css';
import NewsCard from '../js/components/NewsCard';
import NewsCardList from '../js/components/NewsCardList';
import NewsApi from '../js/modules/NewsApi';
import {
  NEWS_API_URL,
  NEWS_API_KEY
} from '../js/constants/constants';
import SearchInput from '../js/components/SearchInput';
import MoreButton from './components/MoreButton';
import SearchStatus from "./components/SearchStatus";
import DataStorage from '../js/modules/DataStorage';
import {NEWS_FOR_RENDERING} from "../js/constants/constants";

const searchInput = document.querySelector(".search__input");
const searchButton = document.querySelector(".search__button");
const searchError = document.querySelector(".search__error");
const searchResults = document.querySelector('.search-results');
const searchResultsList = document.querySelector('.search-results__list');
const searchResultsMoreButton = document.querySelector('.search-results__more-button');
const preloader = document.querySelector('.preloader');
const nothingFound = document.querySelector('.nothing-found');
const serverError = document.querySelector('#server-error');
let news;
const search = new SearchInput(searchInput, searchButton, searchError);
const dataStorage = new DataStorage();
const newsApi = new NewsApi(NEWS_API_URL, NEWS_API_KEY);
const newsCard = new NewsCard();
const newsCardsList = new NewsCardList(searchResultsList, newsCard);
const searchStatus = new SearchStatus(preloader, nothingFound, serverError);
const moreButton = new MoreButton(searchResultsMoreButton, () => render());

function render() {
  const data = news.splice(0, NEWS_FOR_RENDERING); // отрисовываем 3 новости и удаляем их
  for (let i = 0; i < NEWS_FOR_RENDERING; i++) {
    newsCardsList.addCard(data[i])
  }
  if (news.length) {
    moreButton.show();
  } else {
    moreButton.hide();
  }
}

function searchNews() {
  search.deactivateBtn();
  searchStatus.showWait();
  if (search.input.value) {
    newsCardsList.deleteCard();
    searchResults.classList.add('hidden');
    moreButton.hide();
    dataStorage.clearStorage();
    newsApi.getNews(search.input.value)
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(res.status);
        })
        .then(data => {
          dataStorage.saveStorage(data);
          localStorage.setItem('query', search.input.value.trim());
          news = data.articles;
          if (news.length > 0) {
            render();
            searchResults.classList.remove('hidden');
          } else {
            searchStatus.showEmpty();
          }
        })
        .catch(() => {
          searchStatus.showError();
        })
        .finally(() => {
          searchStatus.hiddenShowWait();
          search.activateBtn();
        })
  }
}

searchButton.addEventListener('click', (event) => {
  event.preventDefault();
  searchNews();
});

window.onload = () => {
  news = dataStorage.loadData().articles;
  search.input.value = localStorage.getItem('query');
  search.activateBtn();
  render();
  (news.length != 0) ? searchResults.classList.remove('hidden') : searchStatus.showEmpty();
  searchError.classList.add('hidden');
};
