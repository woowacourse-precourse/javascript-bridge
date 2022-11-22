const BridgeGame = require('./BridgeGame')
const InputView = require('./InputView')
const OutputView = require('./OutputView')

class App {
  async play() {
    const size = await InputView.readBridgeSize()

    const bridgeGame = new BridgeGame(size)

    while(!bridgeGame.isEnd()){
      const direction = await InputView.readMoving()

      const moveResult = bridgeGame.move(direction)

      const map = bridgeGame.getMap()

      OutputView.printMap(map)
    }
  }
}

const app = new App()
app.play()

module.exports = App;
