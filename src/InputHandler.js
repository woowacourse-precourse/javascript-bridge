const { checkBridgeSizeInput } = require("./ErrorCase");
const { BridgeSize } = require("./ErrorHandler");

const InputHandler = {
  handleBridgeSizeInput(app, input, readAgain) {
    const isError = checkBridgeSizeInput(input);

    BridgeSize[isError](app, input, readAgain);
  },
};

module.exports = InputHandler;
