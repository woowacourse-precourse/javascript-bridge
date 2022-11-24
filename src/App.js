const { BridgeGameProcessor } = require('./domain/BridgeGameProcessor');

class App {
  constructor() {
    this.BridgeGameProcessor = new BridgeGameProcessor();
  }

  play() {
    this.BridgeGameProcessor.start();
  }
}

const app = new App();
app.play();

module.exports = App;
