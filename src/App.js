const { readBridgeSize } = require('./InputView');

class App {
  #bridgeSize;
  play() {
    readBridgeSize((size) => {
      this.#bridgeSize = size;
    });
  }
}

const app = new App();
app.play();

module.exports = App;
