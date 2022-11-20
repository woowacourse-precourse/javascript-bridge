const { MESSAGE } = require('./constant');
const BridgeController = require('./controller/BridgeController');
const InputView = require('./views/InputView');

class App {
  #bridgeCtrl;

  play() {
    this.#bridgeCtrl = new BridgeController();
    this.gameStart();
  }

  gameStart() {
    this.#bridgeCtrl.print(MESSAGE.START_NOTIFICATION);
    InputView.readBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;
