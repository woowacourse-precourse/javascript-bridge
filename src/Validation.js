const { ERROR_MESSAGE, BRIDGE, COMMAND } = require("./utils/constans");
const { Console } = require("@woowacourse/mission-utils");

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
      throw Console.print(ERROR_MESSAGE.MOVING_COMMAND);
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
