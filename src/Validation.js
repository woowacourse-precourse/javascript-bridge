const { Console } = require("@woowacourse/mission-utils");
const { COMMAND, BRIDGE } = require("./constants/game");
const { ERROR_MESSAGE } = require("./constants/message");

const Validation = {
  bridgeSize: (bridgeSize) => {
    if (
      Number.isNaN(bridgeSize) ||
      !Validation.isCorrectBrigeSize(bridgeSize)
    ) {
      throw Console.print(ERROR_MESSAGE.BRIDGE_SIZE);
    }
  },
  movingCommand: (movingCommand) => {
    if (!Validation.isCorrectMovingCommand(movingCommand)) {
      throw Console.print(ERROR_MESSAGE.MOVING_COMMAND);
    }
  },

  gameCommand: (gameCommand) => {
    if (!Validation.isCorrectGameCommand(gameCommand)) {
      throw Console.print(ERROR_MESSAGE.GAME_COMMAND);
    }
  },

  isCorrectBrigeSize(bridgeSize) {
    return (
      BRIDGE.SIZE.MINIMUN <= bridgeSize && bridgeSize <= BRIDGE.SIZE.MAXIMUM
    );
  },

  isCorrectMovingCommand(movingCommand) {
    return (
      movingCommand === COMMAND.MOVING.UP ||
      movingCommand === COMMAND.MOVING.DOWN
    );
  },

  isCorrectGameCommand(gameCommand) {
    return (
      gameCommand === COMMAND.GAME.RETRY || gameCommand === COMMAND.GAME.QUIT
    );
  },
};

module.exports = Validation;
