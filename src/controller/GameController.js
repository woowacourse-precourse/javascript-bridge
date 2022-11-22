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

  saveSize(input) {
    this.bridgeGame.saveSize(input);
  }

  prebuildBridge(input) {
    this.bridgeGame.precompose(input);
  }

  saveMoving(input) {
    this.bridgeGame.saveUpOrDown(input);
  }
};

module.exports = GameController;
