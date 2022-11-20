const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const { readBridgeSize } = require('./InputView');

class App {
  play() {
    readBridgeSize(this.bridgeSetting);
  }
  bridgeSetting = (input) => {
    const answerList = makeBridge(input, generate);
    console.log(answerList);
  };
}

module.exports = App;

const app = new App();
app.play();
