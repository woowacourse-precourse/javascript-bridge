const { checkBridgeSizeInput, checkMovingInput, checkRetrialInput } = require("./ErrorCase");
const { BridgeSize, Moving, Retrial } = require("./ErrorHandler");

const InputHandler = {
  handleBridgeSizeInput({ app, bridgeSize, readAgain }) {
    const isError = checkBridgeSizeInput(bridgeSize);

    BridgeSize[isError]({ app, bridgeSize, readAgain });
  },

  handleMovingInput({ app, bridgeGame, direction, readAgain }) {
    const isError = checkMovingInput(direction);

    Moving[isError]({ app, bridgeGame, direction, readAgain });
  },

  handleRetrialInput({ app, bridgeGame, answer, readAgain }) {
    const isError = checkRetrialInput(answer);

    Retrial[isError]({ app, bridgeGame, answer, readAgain });
  },
};

module.exports = InputHandler;
