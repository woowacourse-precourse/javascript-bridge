class App {
  play() {}
  constructor() {
    this.bridgeGame = new BridgeGame();
  }
  play() {
    Controller.play(this.bridgeGame);
  }
}

module.exports = App;
