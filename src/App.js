const InputView = require('../src/InputView')
const OutputView = require('../src/OutputView')
const BridgeGame = require('../src/BridgeGame');

class App {
  #bridgeGame = new BridgeGame()

  play() {
    InputView.readBridgeSize(size => {
      this.#bridgeGame.makeBridge(size)
      this.getUserMove()
    })
  }

  getUserMove() {
    InputView.readMoving(move => {
      this.#bridgeGame.moveCompare(move)
      OutputView.printMap(this.#bridgeGame.moveResult())
      this.getUserMove()
    })
  }
}

module.exports = App;
