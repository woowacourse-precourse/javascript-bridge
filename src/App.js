const BridgeGame = require('./BridgeGame')
const InputView = require('./InputView')

class App {
  async play() {
    const size = await InputView.readBridgeSize()

    const bridgeGame = new BridgeGame(size)

    while(!bridgeGame.isEnd()){
      const direction = await InputView.readMoving()

      bridgeGame.move(direction)
    }
  }
}

const app = new App()
app.play()

module.exports = App;
