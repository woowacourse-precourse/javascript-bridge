const OutputView = require("./views/OutputView.js")
const InputView = require("./views/InputView.js")

class App {

  play() {
    OutputView.printGameStart();
    InputView.readBridgeSize();
  }
}

const app = new App();
app.play();
module.exports = App;
