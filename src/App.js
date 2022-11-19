const OutputView = require("./views/OutputView.js")
const InputView = require("./views/InputView.js")

class App {
  constructor(){
    OutputView.printGameStart();
    InputView.readBridgeSize();
  }
  play() {
  }
}

const app = new App();
app.play();
module.exports = App;
