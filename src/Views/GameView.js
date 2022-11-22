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
    this.outputView.print('최종 게임 결과 \n');
    this.printMap(upsideBridge, downSideBridge);
  }

  printResult(userLife, attemptNumber) {
    this.outputView.print(`\n 게임 성공 여부: ${userLife ? '성공' : '실패'}`);
    this.outputView.print(`총 시도한 횟수: ${attemptNumber}`);
  }

  printError(message) {
    this.outputView.print(message);
  }

  close() {
    this.outputView.close();
  }
}

module.exports = GameView;
