class CustomError {
  static #ERROR_MESSAGE_BEGINNING = '[ERROR]';

  #message;

  constructor(message) {
    this.#message = `${CustomError.#ERROR_MESSAGE_BEGINNING} ${message}`;
  }

  get message() {
    return this.#message;
  }
}

module.exports = CustomError;
