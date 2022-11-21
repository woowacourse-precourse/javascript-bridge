const InputView = require("../src/InputView");

class App {
  play() {
    const bridge = InputView.readBridgeSize();
    console.log(1);
  }
}

const app = new App();
app.play();
module.exports = App;
