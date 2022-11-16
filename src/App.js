const InputView = require("./InputView");

class App {
  #length;
  #moving;

  play() {
    InputView.readBridgeSize((size) => this.getlength(size));
  }

  getlength(size) {
    this.#length = size;

    InputView.readMoving((moving) => this.getMoving(moving));
  }

  getMoving(moving) {
    this.#moving = moving;
  }
}

module.exports = App;

const app = new App();
app.play();
