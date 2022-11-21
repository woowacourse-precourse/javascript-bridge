const { printInputErrorMessage } = require("./OutputView");
const { makeBridge } = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const { ERROR } = require("./constants");

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
};

module.exports = ErrorHandler;
