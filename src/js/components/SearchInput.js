export default class SearchInput {
  constructor(input, btn, error) {
    this.input = input;
    this.btn = btn;
    this.error = error;
    this.input.addEventListener('input', this.validate.bind(this));
  }

  activateBtn() {
    this.btn.removeAttribute('disabled');
    this.btn.classList.add('search__button_submit');
  }

  deactivateBtn() {
    this.btn.setAttribute('disabled', true);
    this.btn.classList.remove('search__button_submit');
  }

  validate() {
    let value = this.input.value;
    if (value.length < 2) {
      this.deactivateBtn();
      this.error.classList.remove('hidden');
    } else {
      this.activateBtn();
      this.error.classList.add('hidden');
    }
  }
}
