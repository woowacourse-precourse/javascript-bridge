const { MESSAGE } = require('./constant');
const BridgeController = require('./controller/BridgeController');
const InputView = require('./views/InputView');

class App {
  #bridgeCtrl;

  play() {
    this.#bridgeCtrl = new BridgeController();
    this.#bridgeCtrl.printMessage(MESSAGE.START_NOTIFICATION);
    this.gameStart();
  }

  gameStart() {
    InputView.readBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;
