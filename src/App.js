const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Validator = require('./Validator');

class App {
  play() {
    OutputView.printGameStart();
    InputView.readBridgeSize(this.settingBridge);
  }
  
  settingBridge(size) {
    Validator.checkBridgeSize(size);
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