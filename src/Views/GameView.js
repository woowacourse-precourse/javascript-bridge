const Model = require('../Models/Model');

class GameView {
  constructor(inputView, outputView) {
    this.inputView = inputView;
    this.outputView = outputView;
    this.model = new Model();
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

  end() {
    this.outputView.close();
  }
}

module.exports = GameView;
