const { RESULT } = require('../Constants');
const editBridge = require('../Utilities/EditBridge');

class GameView {
  constructor(inputView, outputView) {
    this.inputView = inputView;
    this.outputView = outputView;
  }

  close() {
    this.outputView.close();
  }

  readBridgeSize(query, callback) {
    this.inputView.readLine(query, callback);
  }

  readMoving(query, callback) {
    this.inputView.readLine(query, callback);
  }

  readGameCommand(query, callback) {
    this.inputView.readLine(query, callback);
  }

  printMap(upsideBridge, downsideBridge) {
    this.outputView.print(editBridge(upsideBridge));
    this.outputView.print(editBridge(downsideBridge));
  }

  printResultBridge(upsideBridge, downSideBridge) {
    this.outputView.print(RESULT.TITLE);
    this.printMap(upsideBridge, downSideBridge);
  }

  printResult(userLife, attemptNumber) {
    this.outputView.print(RESULT.CHART.SUCESS_OR_FAIL(userLife));
    this.outputView.print(RESULT.CHART.ATTEMPT(attemptNumber));
    this.close();
  }

  printError(message) {
    this.outputView.print(message);
  }
}

module.exports = GameView;
