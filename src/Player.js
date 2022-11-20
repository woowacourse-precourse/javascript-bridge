class Player {
  #path;

  constructor() {
    this.#path = { upside: [], downside: [] };
    this.#currentLocation = 0;
  }
}
