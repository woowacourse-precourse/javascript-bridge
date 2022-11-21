class User {
  #route = [];
  #tryCount;

  constructor() {
    this.#tryCount = 1;
  }

  getTryCount() {
    return this.#tryCount
  }

  getRoute() {
    return this.#route;
  }

  setRoute(direction) {
    this.#route.push(direction);
  }

  clear() {
    this.#route = [];
  }

  count() {
    this.#tryCount += 1;
  }
}

module.exports = User;