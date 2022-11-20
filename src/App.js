const { printIntro } = require("./OutputView");
const { readBridgeSize } = require("./InputView");

class App {
  play() {
    printIntro();

    this.inputSize();
  }

  inputSize() {
    readBridgeSize(this.generate);
  }

  generate(size) {
    console.log(size);
  }
}

const app = new App();
app.play();

module.exports = App;
