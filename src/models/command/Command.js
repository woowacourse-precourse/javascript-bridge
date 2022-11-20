class Command {
  #command;

  constructor(command) {
    this.#command = command;
  }

  getCommand() {
    return this.#command;
  }

  static #validate() {}

  static #isValid() {}
}

module.exports = Command;
