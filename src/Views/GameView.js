const { RESULT } = require('../Constants');
const { editBridge } = require('../Utilities');

class GameView {
  constructor(inputView, outputView) {
    this.inputView = inputView;
    this.outputView = outputView;
  }

  // inputView 메서드
  readBridgeSize(query, callback) {
    this.inputView.readLine(query, callback);
  }

  readMoving(query, callback) {
    this.inputView.readLine(query, callback);
  }

  readGameCommand(query, callback) {
    this.inputView.readLine(query, callback);
  }

  // outputView 메서드
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
  }

  printError(message) {
    this.outputView.print(message);
  }

  close() {
    this.outputView.close();
  }
}

module.exports = GameView;
