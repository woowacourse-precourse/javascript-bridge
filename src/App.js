const InputView = require("./views/InputView");

class App {
  play() {
    InputView.readBridgeSize();
  }
}

module.exports = App;

const app = new App();
app.play();
