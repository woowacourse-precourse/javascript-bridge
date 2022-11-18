const InputView = require("./InputView");
const OutputView = require("./OutputView");

class CallView {
  constructor() {
    this.InputView = InputView;
    this.OutputView = OutputView;
  }

  readBridge(callBack) {
    return this.InputView.readBridgeSize(callBack);
  }

  readMove(callBack) {
    return this.InputView.readMoving(callBack);
  }

  readCommand(stopCallBack, retryCallBack) {
    return this.InputView.readGameCommand(stopCallBack, retryCallBack);
  }

  currentMap(map) {
    return this.OutputView.printMap(map);
  }

  resultPrint(map, tryCount, gameState) {
    return this.OutputView.printResult(map, tryCount, gameState);
  }
}

module.exports = CallView;
