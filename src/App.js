const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const OutputView = require('./OutputView');

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
