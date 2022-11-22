const BridgeGame = require('./BridgeGame')
const InputView = require('./InputView')

class App {
  async play() {
    const size = await InputView.readBridgeSize()

    const bridgeGame = new BridgeGame(size)
  }
}

const app = new App()
app.play()

module.exports = App;
