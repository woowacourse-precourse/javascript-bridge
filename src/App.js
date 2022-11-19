const InputView = require("./Controller/InputView");

class App {
  play() {
    InputView.readBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;
