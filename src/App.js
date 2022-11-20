const InputView = require("./InputView");
const OutputView = require("./OutputView");

class App {
  play() {
    OutputView.printStart();
    InputView.readBridgeSize();
  }
}

const app = new App();
console.log(app.play());
module.exports = App;
