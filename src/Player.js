class Player {
  #bridgePath;
  #out;

  constructor() {
    this.#bridgePath = [];
    this.#out = "";
  }

  move(direction) {
    this.#bridgePath.push(direction);
  }
}
