const { printInputErrorMessage, printMap } = require("./OutputView");
const { makeBridge } = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const { ERROR } = require("./constants");
const { takeNextStep } = require("./utils");

const ErrorHandler = {
  BridgeSize: {
    true({ app, readAgain }) {
      printInputErrorMessage(ERROR.WRONG_BRIDGE_SIZE);
      readAgain(app);
    },

    false({ app, bridgeSize }) {
      const bridge = makeBridge(bridgeSize, generate);

      app.createGame(bridge);
    },
  },

  Moving: {
    true({ app, bridgeGame, readAgain }) {
      printInputErrorMessage(ERROR.WRONG_DIRECTION);
      readAgain(app, bridgeGame);
    },

    false({ app, bridgeGame, direction, readAgain }) {
      bridgeGame.move(direction);
      printMap(bridgeGame);

      const movedCorrect = bridgeGame.hasMovedCorrectly();
      takeNextStep[movedCorrect]({ app, bridgeGame, readAgain });
    },
  },
};

module.exports = ErrorHandler;
