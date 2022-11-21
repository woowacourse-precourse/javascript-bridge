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
    this.outputView.print(
      `[${upsideBridge.slice(0, upsideBridge.length - 1)}]`,
    );
    this.outputView.print(
      `[${downsideBridge.slice(0, downsideBridge.length - 1)}]`,
    );
  }

  printResultBridge(upsideBridge, downSideBridge) {
    this.outputView.print('최종 게임 결과 \n');
    this.printMap(upsideBridge, downSideBridge);
  }

  printResult(userLife, attemptNumber) {
    this.outputView.print(`\n 게임 성공 여부: ${userLife ? '성공' : '실패'}`);
    this.outputView.print(`총 시도한 횟수: ${attemptNumber}`);
  }
}

module.exports = GameView;
