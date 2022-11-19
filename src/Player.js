class Player {
  #position;

  constructor() {
    this.#position = 0;
  }

  move() {
    this.#position++;
  }
}
