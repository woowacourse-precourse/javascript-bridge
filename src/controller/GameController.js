const GameController = class {
  constructor(view, bridgeGame) {
    this.view = view;
    this.bridgeGame = bridgeGame;
  }

  start() {
    this.runProcess();
  }

  runProcess() {}
};

module.exports = GameController;
