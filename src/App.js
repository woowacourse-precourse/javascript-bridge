const BridgeGame = require('./BridgeGame');
const inputView = require('./inputView');
const outputView = require('./outputView');

class App {
  play() {
    outputView.printStart();
    const bridgeSize = inputView.readBridgeSize(this.validateSize);
  }

  validateSize(size) {
    return new BridgeGame(size);
  }

}


module.exports = App;
