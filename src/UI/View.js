const InputView = require("./InputView");
const OutputView = require("./OutputView");

const View = {
  bridgeSize: (generateBridge) => InputView.readBridgeSize(generateBridge),
  moving: (move) => InputView.readMoving(move),

  gameStart: () => OutputView.printStart(),
};

module.exports = View;
