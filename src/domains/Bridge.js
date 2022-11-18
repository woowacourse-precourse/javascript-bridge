class Bridge {
  #array;
  #step;
  #status;

  constructor(array) {
    this.#array = array;
    this.#step = 0;
    this.#status = [];
  }

  getArray() {
    return this.#array;
  }

  #convertMovingToIndex(moving) {
    const map = {
      D: 0,
      U: 1
    };

    return map[moving];
  }

  #checkSquare(moving, array, step) {
    return moving === array[step];
  }

  #addStatus(result, index) {
    this.#status[this.#step] = [' ', ' '];
    this.#status[this.#step][index] = result ? 'O' : 'X';
  }

  #increaseStep(result) {
    if (result) {
      this.#step += 1;
    }
  }

  cross(moving) {
    const result = this.#checkSquare(moving, this.#array, this.#step);
    const index = this.#convertMovingToIndex(moving);
    this.#addStatus(result, index);
    this.#increaseStep(result);

    return { status: this.#status, result };
  }
}

module.exports = Bridge;
