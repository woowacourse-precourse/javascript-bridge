const BridgeProcess = require('./controller/BridgeProcess');
const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');

// 앱은 controlel
class App {
  play() {
    new BridgeProcess().start();
  }
}

new App().play();
module.exports = App;
