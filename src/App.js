const { printStart } = require("./OutputView");
const { readBridgeSize } = require("./InputView");

class App {
  play() {
    printStart();
    readBridgeSize();
  }
}
const app = new App();
app.play();

module.exports = App;
