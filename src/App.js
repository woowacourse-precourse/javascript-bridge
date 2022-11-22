const InputView = require("./InputView");
const { printStartMessage } = require("./OutputView");

class App {
  play() {
    const model = Object.create(InputView);

    printStartMessage();
    model.readBridgeSize();
  }
}

const app = new App();
app.play();
module.exports = App;
