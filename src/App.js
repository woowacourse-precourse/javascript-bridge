const InputView = require("../src/InputView");

class App {
  play() {
    const bridge = InputView.readBridgeSize();
  }
}

const app = new App();
app.play();
module.exports = App;
