const Bridge = require('./Bridge');

class Selection {
  #components;
  #state;

  constructor() {
    this.#components = [];
    this.#state = true;
  }

  componentsLength() {
    return this.#components.length;
  }

  getComponents() {
    return this.#components;
  }

  getComponent(index) {
    return this.#components[index];
  }

  setComponent(direction) {
    this.#components.push(direction);
  }
  getState() {
    return this.#state;
  }
  setState(state) {
    this.#state = state;
  }
}

module.exports = Selection;
