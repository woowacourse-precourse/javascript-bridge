const { readBridgeSize } = require('./InputView');

class App {
  play() {
    
    readBridgeSize(this.bridgeSetting);
  }
  bridgeSetting = (input) => {
    // makeBridge();
  };
}

module.exports = App;

const app = new App();
app.play();
