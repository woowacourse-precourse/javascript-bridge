const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const OutputView = require('./OutputView');
const UserInput = require('./UserInput');
const BridgeUnit = require('./BridgeUnit');

class App {
  play() {
    let size = 5;
    let generateRandomNumber = BridgeRandomNumberGenerator.generate;
    const bridgeBits = BridgeMaker.makeBridge(size, generateRandomNumber);
    console.log(bridgeBits)
    console.log(bridgeBits)
    console.log(bridgeBits)

    OutputView.end();

  }
}

new App().play();

module.exports = App;
