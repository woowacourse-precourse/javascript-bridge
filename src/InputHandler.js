const { checkBridgeSizeInput } = require("./ErrorCase");
const { BridgeSize } = require("./ErrorHandler");

const InputHandler = {
  handleBridgeSizeInput({ app, bridgeSize, readAgain }) {
    const isError = checkBridgeSizeInput(bridgeSize);

    BridgeSize[isError]({ app, bridgeSize, readAgain });
  },
};

module.exports = InputHandler;
