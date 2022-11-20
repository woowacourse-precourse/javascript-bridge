class GameView {
  constructor(inputView, outputView) {
    this.inputView = inputView;
    this.outputView = outputView;
  }

  readBridgeSize(query, callback) {
    this.inputView.readLine(query, callback);
  }
}

module.exports = GameView;
