const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Validator = require('./Validator');
const BridgeMaker = require('./BridgeMaker');
const { Utils } = require('./Utils');

class App {
  play() {
    OutputView.printGameStart();
    InputView.readBridgeSize(this.settingBridge);
  }
  
  settingBridge(size) {
    Validator.checkBridgeSize(size);
    let bridge = BridgeMaker.makeBridge(size, Utils.generateRandomNumber);
    InputView.readMoving(this.playingBridge);
  }

  playingBridge() {
    InputView.readGameCommand(this.endingBridge);
  }

  endingBridge() {

  }
}

module.exports = App;

const app = new App();
app.play();