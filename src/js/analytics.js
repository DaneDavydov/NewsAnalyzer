import '../pages/analytics.css';
import Statistics from './components/Statistics';
import DataStorage from './modules/DataStorage';
import {REQUEST_DEPTH} from './constants/constants';
import {queryDate, dateStatistics} from './utils/date'

const statistics = new Statistics(document.querySelector('.chart__table'));
const analyticsWeeklyNews = document.querySelector('.analytics__weekly-news');
const analyticsMentionedInTitles = document.querySelector('.analytics__mentioned-in-titles');
const analyticsTopic = document.querySelector('.analytics__topic');
const chartMonth = document.querySelector('.chart__month');

const query = localStorage.getItem('query');

function numberOfMentions(title, query) {
  const re = new RegExp(`${query}`, 'gi');
  const mentions = title.toLowerCase().match(re);
  return mentions ? mentions.length : 0;
}

window.onload = () => {
  const data = new DataStorage().loadData();
  let headings = "";
  analyticsTopic.textContent = `«${query}»`;
  analyticsWeeklyNews.textContent = data.totalResults;
  chartMonth.textContent = `(${new Date().toLocaleString('ru', {month: 'long'})})`;
  data.articles.forEach(article => {
    headings += ' ' + article.title;
  });
  analyticsMentionedInTitles.textContent = numberOfMentions(headings, query);
  const articles = data.articles;

  for (let i = 0; i <= REQUEST_DEPTH; i++) {
    let counter = 0;
    articles
        .filter(e => queryDate(new Date(e.publishedAt)) == queryDate(dateStatistics(i)))
        .forEach(news => {
          counter = numberOfMentions(news.title, query) + counter;
        });
    const date = dateStatistics(i);
    statistics.render(date.getDate() + ', ' + date.toLocaleDateString("ru", {weekday: 'short'}), counter);
  }
};