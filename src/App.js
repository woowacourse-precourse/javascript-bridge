const InputView = require('../src/InputView')
const BridgeGame = require('../src/BridgeGame');

class App {
  play() {
    const bridgeGame = new BridgeGame()

    InputView.readBridgeSize(size => {
      bridgeGame.makeBridge(size)
      this.getUserMove()
    })
  }

  getUserMove() {
    InputView.readMoving(move => {})
  }
}

module.exports = App;
