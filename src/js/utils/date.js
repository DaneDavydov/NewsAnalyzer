const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
const dayMs = 1000 * 60 * 60 * 24;

export function date(date) {
  var date = new Date(date);
  return `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`;
}

export function dateStatistics(i) {
  return (new Date(new Date().getTime() - dayMs*6 + (i * dayMs)));
}

export function queryDate(date) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}