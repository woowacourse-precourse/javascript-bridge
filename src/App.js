const InputView = require('./InputView');
const Validator = require('./Validator');

class App {
  play() {
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