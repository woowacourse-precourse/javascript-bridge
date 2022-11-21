const { checkBridgeSizeInput } = require("./ErrorCase");
const { printInputErrorMessage } = require("./OutputView");
const { makeBridge } = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const { ERROR } = require("./constants");

const BridgeSizeError = {
  true(app, _, readAgain) {
    printInputErrorMessage(ERROR.WRONG_BRIDGE_SIZE);
    readAgain(app);
  },

  false(app, bridgeSize, _) {
    const bridge = makeBridge(bridgeSize, generate);

    app.createGame(bridge);
  },
};

const InputHandler = {
  handleBridgeSizeInput(app, input, readAgain) {
    const isError = checkBridgeSizeInput(input);

    BridgeSizeError[isError](app, input, readAgain);
  },
};

module.exports = InputHandler;
