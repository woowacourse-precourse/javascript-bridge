const BridgeGameControl = require('./BridgeGameControl');

class App {
  constructor() {
    this.bridgeGameControl = new BridgeGameControl();
  };

  play() {
    this.bridgeGameControl.start();
  };
};

const app = new App();
app.play();

module.exports = App;
