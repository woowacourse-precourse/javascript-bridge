const outputViewModule = require('../src/OutputView');
const inputViewModule = require('../src/InputView');

class App {
  play() {
    outputViewModule.printStart();
    inputViewModule.readBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;
