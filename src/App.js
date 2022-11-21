const InputView = require('../src/InputView')
const OutputView = require('../src/OutputView')
const BridgeGame = require('../src/BridgeGame');

class App {
  #bridgeGame = new BridgeGame()

  play() {
    InputView.readBridgeSize(size => {
      this.#bridgeGame.makeBridge(size)
      OutputView.linkBreak()
      this.getUserMove()
    })
  }

  getUserMove() {
    InputView.readMoving(move => {
      this.#bridgeGame.moveCompare(move)
      OutputView.printMap(this.#bridgeGame.moveResult())
      this.#bridgeGame.isClear(stats => {
        if (stats) {
          OutputView.printResult(this.#bridgeGame.mapResult(stats))
        } else {
          this.getUserMove()
        }
      })
    })
  }
}

module.exports = App;
