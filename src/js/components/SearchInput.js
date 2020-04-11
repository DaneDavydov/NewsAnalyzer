export default class SearchInput {
  constructor(input, btn, error) {
    this._btn = btn;
    this._error = error;
    this.input = input;
    this.input.addEventListener('input', this.validate.bind(this));
  }

  activateBtn() {
    this._btn.removeAttribute('disabled');
    this._btn.classList.add('search__button_submit');
  }

  deactivateBtn() {
    this._btn.setAttribute('disabled', true);
    this._btn.classList.remove('search__button_submit');
  }

  validate() {
    let value = this.input.value;
    if (value.length < 2) {
      this.deactivateBtn();
      this._error.classList.remove('hidden');
    } else {
      this.activateBtn();
      this._error.classList.add('hidden');
    }
  }
}
