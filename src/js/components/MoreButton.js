export default class MoreButton {
  constructor(button, handler) {
    this._button = button;
    this._buttonHandler = handler;
    this._button.addEventListener('click', (...rest) => this._buttonHandler(...rest));
  }

  show() {
    this._button.classList.remove('hidden');
  }

  hide() {
    this._button.classList.add('hidden');
  }
}