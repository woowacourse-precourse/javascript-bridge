const User = require('../entities/User');

const RULE = require('../constants');

const UserError = require('../../error/UserError');
const ERROR_MESSAGE = require('../../error/error.constants');

class userInteractor {
  #user;

  constructor() {
    this.#user = new User();
  }

  init() {
    this.#user.init();
  }

  move(direction) {
    if (direction !== RULE.BEHAVIOR.UP && direction !== RULE.BEHAVIOR.DOWN) {
      throw new UserError(ERROR_MESSAGE.INVALID_USER_MOVE);
    }
    this.#user.move(direction);
  }

  getLog() {
    return [...this.#user.getLog()];
  }

  getLocation() {
    return this.#user.getLocation();
  }

  getCurrentDirection() {
    return this.#user.getCurrentDirection();
  }
}

module.exports = userInteractor;
