export default class MoreButton {
  constructor(button, handler) {
    this._button = button;          // Ссылка на кнопку
    this._buttonHandler = handler;  // Обработчик нажатия на кнопку
    this._button.addEventListener('click', (...rest) => this._buttonHandler(...rest));
  }

  show() {
    this._button.classList.remove('hidden');
  }

  hide() {
    this._button.classList.add('hidden');
  }
}