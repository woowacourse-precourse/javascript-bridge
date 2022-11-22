const BridgeGame = require('./model/BridgeGame');
const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');
const BridgeController = require('./controller/BridgeController');

class App {
  constructor() {
    this.inputView = InputView;
    this.outputView = OutputView;
    this.bridgeGame = new BridgeGame();
    this.bridgeCntroller = new BridgeController(this.inputView, this.outputView, this.bridgeGame);
  }

  play() {
    this.bridgeCntroller.runProcess();
  }
}
const app = new App();
app.play();
module.exports = App;
