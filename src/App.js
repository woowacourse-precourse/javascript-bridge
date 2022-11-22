const { readBridgeSize } = require("./InputView");
const { printStartMessage } = require("./OutputView");

class App {
  play() {
    printStartMessage();
    readBridgeSize();
  }
}

const app = new App();
app.play();
module.exports = App;
