const { checkBridgeSizeInput, checkMovingInput } = require("./ErrorCase");
const { BridgeSize, Moving } = require("./ErrorHandler");

const InputHandler = {
  handleBridgeSizeInput({ app, bridgeSize, readAgain }) {
    const isError = checkBridgeSizeInput(bridgeSize);

    BridgeSize[isError]({ app, bridgeSize, readAgain });
  },

  handleMovingInput({ app, bridgeGame, direction, readAgain }) {
    const isError = checkMovingInput(direction);

    Moving[isError]({ app, bridgeGame, direction, readAgain });
  },
};

module.exports = InputHandler;
