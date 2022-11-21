const BridgeGamePresenter = require('./presenter/BridgeGamePresenter');

class App {
  #bridgeGamePresenter = new BridgeGamePresenter();

  play() {
    this.#bridgeGamePresenter.run();
  }
}

module.exports = App;
