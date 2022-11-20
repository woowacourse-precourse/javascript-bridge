const InputView = require("./InputView");
const OutputView = require("./OutputView");

const View = {
  bridgeSize: (generateBridge) => InputView.readBridgeSize(generateBridge),
  moving: (move) => InputView.readMoving(move),
  gameCommand: (retry) => InputView.readGameCommand(retry),

  gameStart: () => OutputView.printStart(),
};

module.exports = View;
