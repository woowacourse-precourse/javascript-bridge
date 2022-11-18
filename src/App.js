const BridgeGame = require('./BridgeGame');
const inputView = require('./inputView');
const outputView = require('./outputView');

class App {
  play() {
    outputView.printStart();
    inputView.readBridgeSize(this.generateBridge)
  }

  generateBridge(size) {
    const bridgeGame = new BridgeGame(size);
    return outputView.printMap(bridgeGame.bridge);
  }

}

const app = new App();
app.play();


module.exports = App;
