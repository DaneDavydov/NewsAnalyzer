import '../pages/index.css';
import NewsCard from '../js/components/NewsCard';
import NewsCardList from '../js/components/NewsCardList';
import NewsApi from '../js/modules/NewsApi';
import {NEWS_API_URL, NEWS_API_KEY} from '../js/constants/constants';
import SearchInput from '../js/components/SearchInput';
import MoreButton from './components/MoreButton';
import SearchStatus from "./components/SearchStatus";

const searchInput = document.querySelector(".search__input");
const searchButton = document.querySelector(".search__button");
const searchError = document.querySelector(".search__error");
const searchResults = document.querySelector('.search-results');
const searchResultsList = document.querySelector('.search-results__list');
const searchResultsMoreButton = document.querySelector('.search-results__more-button');
const preloader = document.querySelector('.preloader');
const nothingFound = document.querySelector('.nothing-found');
const serverError = document.querySelector('#server-error');

const from = -7;
const to = 0;
const search = new SearchInput(searchInput, searchButton, searchError);

const newsApi = new NewsApi(NEWS_API_URL, NEWS_API_KEY, from, to);
const newsCard = new NewsCard();
const newsCardsList = new NewsCardList(searchResultsList);
const moreButton = new MoreButton(searchResultsMoreButton, () => render());
const searchStatus = new SearchStatus(preloader, nothingFound, serverError);
let storage;

function render() {
  const data = storage.splice(0, 3); // отрисовываем 3 новости и удаляем их из массива
  data.forEach(news => newsCardsList.addCard(newsCard.createCard(news)));
  if (storage.length) {
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
    localStorage.clear();
    newsApi.getNews(search.input.value)
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(res.status);
        })
        .then(newsArray => {
          localStorage.setItem('news', JSON.stringify(newsArray));
          localStorage.setItem('keyword', search.input.value.trim());
          storage = newsArray.articles;
          if (storage.length > 0) {
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

if (localStorage.getItem('news')) {
  storage = JSON.parse(localStorage.getItem('news')).articles;
  search.input.value = localStorage.getItem('keyword');
  search.activateBtn();
  render();
  (storage.length != 0) ? searchResults.classList.remove('hidden') : searchStatus.showEmpty();
  searchError.classList.add('hidden');
}