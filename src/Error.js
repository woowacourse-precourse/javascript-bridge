const PREFIX = '[ERROR] ';

class MyError extends Error {
  constructor(message) {
    super(`${PREFIX}${message}`);
    this.name = this.constructor.name;
  }
}

class InputError extends MyError {}

module.exports = {
  InputError,
};
