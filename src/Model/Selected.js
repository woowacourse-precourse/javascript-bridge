class Selected {
  #selected;

  #validator;

  constructor(validator) {
    this.#selected = [];
    this.#validator = validator;
  }

  #validate(input) {
    this.#validator.isRightLevelString(input);
  }

  get level() {
    return this.#selected.length;
  }

  addElement(input) {
    this.#validate(input);
    this.#selected.push(input);
  }

  getElement(i) {
    return this.#selected[i];
  }

  reset() {
    this.#selected = [];
  }
}

module.exports = Selected;
