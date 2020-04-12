export default class SearchStatus {
  constructor(waitBanner, emptyBanner, errorBanner) {
    this._wait = waitBanner;
    this._empty = emptyBanner;
    this._error = errorBanner;
  }

  showWait() {
    this._wait.classList.remove('hidden');
    this._empty.classList.add('hidden');
    this._error.classList.add('hidden');
  }

  showEmpty() {
    this._wait.classList.add('hidden');
    this._empty.classList.remove('hidden');
    this._error.classList.add('hidden');
  }

  showError() {
    this._wait.classList.add('hidden');
    this._empty.classList.add('hidden');
    this._error.classList.remove('hidden');
  }

  hiddenShowWait() {
    this._wait.classList.add('hidden');
  }

  hidden() {
    this._wait.classList.add('hidden');
    this._empty.classList.add('hidden');
    this._error.classList.add('hidden');
  }
}