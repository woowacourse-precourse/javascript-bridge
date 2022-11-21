const { Console } = require("@woowacourse/mission-utils");
const { COMMAND, BRIDGE } = require("./constants/game");
const { ERROR_MESSAGE } = require("./constants/message");

class Validation {
  static bridgeSize(bridgeSize) {
    if (Number.isNaN(bridgeSize) || !this.#isCorrectBrigeSize(bridgeSize)) {
      throw Console.print(ERROR_MESSAGE.BRIDGE_SIZE);
    }
  }

  static movingCommand(movingCommand) {
    if (!this.#isCorrectMovingCommand(movingCommand)) {
      throw Console.print(ERROR_MESSAGE.MOVING_COMMAND);
    }
  }

  static gameCommand(gameCommand) {
    if (!this.#isCorrectGameCommand(gameCommand)) {
      throw Console.print(ERROR_MESSAGE.GAME_COMMAND);
    }
  }

  static #isCorrectBrigeSize(bridgeSize) {
    return (
      BRIDGE.SIZE.MINIMUN <= bridgeSize && bridgeSize <= BRIDGE.SIZE.MAXIMUM
    );
  }

  static #isCorrectMovingCommand(movingCommand) {
    return (
      movingCommand === COMMAND.MOVING.UP ||
      movingCommand === COMMAND.MOVING.DOWN
    );
  }

  static #isCorrectGameCommand(gameCommand) {
    return (
      gameCommand === COMMAND.GAME.RETRY || gameCommand === COMMAND.GAME.QUIT
    );
  }
}

module.exports = Validation;
