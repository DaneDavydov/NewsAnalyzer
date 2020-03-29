const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
// const dayMs = 24 * 60 * 60 * 1000;

export default function date(date) {
  var date = new Date(date);
  return `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`;
}