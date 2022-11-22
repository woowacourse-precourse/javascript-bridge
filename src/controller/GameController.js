const GameController = class {
  constructor(inputView, outputView, bridgeGame) {
    this.inputView = inputView;
    this.outputView = outputView;
    this.bridgeGame = bridgeGame;
  }

  start() {
    this.runProcess();
  }

  runProcess() {}
};

module.exports = GameController;
