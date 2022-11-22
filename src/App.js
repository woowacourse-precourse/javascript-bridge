const BridgeGameController = require('./controllers/BridgeGameController');

class App {
  constructor() {
    this.controller = new BridgeGameController();
  }

  play() {
    this.controller.start();
  }
}

new App().play();
module.exports = App;
