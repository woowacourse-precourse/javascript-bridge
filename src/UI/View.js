const InputView = require("./InputView");
const OutputView = require("./OutputView");

const View = {
  bridgeSize: (generateBridge) => InputView.readBridgeSize(generateBridge),
  moving: (move) => InputView.readMoving(move),
  gameCommand: (retry) => InputView.readGameCommand(retry),

  gameStart: () => OutputView.printStart(),
  gameMap: (top, bottom) => OutputView.printMap(top, bottom),
};

module.exports = View;
