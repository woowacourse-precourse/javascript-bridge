class App {
  #bridge = [];
  #bridgePrintString = ['', ''];
  #repeatReadMovingCount = 0;
  #resetGameCount = 0;

  play() {
    OutputView.printStart();
    InputView.readBridgeSize(this.afterReadBridgeSize);
  }

  afterReadBridgeSize(bridgeLength = 0) {
    //bridgeLength exception 만들기

    this.#bridge = BridgeMaker.makeBridge(
      bridgeLength,
      BridgeRandomNumberGenerator.generate
    );

    InputView.readMoving(this.afterReadMoving);
  }
}

module.exports = App;
