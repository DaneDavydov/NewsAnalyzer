const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

export default function dateGit(date) {
  var date = new Date(date);
  return `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`;
}
