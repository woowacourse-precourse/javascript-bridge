const InputView = require('../src/InputView')
const OutputView = require('../src/OutputView')
const BridgeGame = require('../src/BridgeGame');

class App {
  #bridgeGame = new BridgeGame()

  play() {
    OutputView.pirntGameStart()
    InputView.readBridgeSize(size => {
      this.#bridgeGame.makeBridge(size)
      OutputView.linkBreak()
      this.userMoving()
    })
  }

  userMoving() {
    InputView.readMoving(move => {
      this.#bridgeGame.moveCompare(move)
      OutputView.printMap(this.#bridgeGame.moveResult())
      this.#bridgeGame.isClear(stats => {
        this.bridgeStats(stats)
      })
    })
  }

  bridgeStats(stats) {
    if (stats) {
      OutputView.printResult(this.#bridgeGame.mapResult(stats))
    } else if (stats === false) {
      this.gameOver(stats)
    } else {
      this.userMoving()
    }
  }

  gameOver(stats) {
    InputView.readGameCommand(callback => {
      this.#bridgeGame.retry(callback) 
      ? this.userMoving()
      : OutputView.printResult(this.#bridgeGame.mapResult(stats))
    })
  }
}

const app = new App()
app.play()

module.exports = App;
