export default class DataStorage {
  constructor() {
  }

  saveStorage(data) {
    localStorage.setItem('news', JSON.stringify(data));
  }

  clearStorage() {
    localStorage.clear();
  }

  loadData() {
    return JSON.parse(localStorage.getItem('news'));
  }
}
