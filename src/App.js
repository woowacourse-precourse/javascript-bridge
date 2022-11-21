const BridgeController = require('./controller/BridgeController');

class App {
  #bridgeController;
  constructor() {
    this.#bridgeController = new BridgeController();
  }
  play() {
    this.#bridgeController.start();
  }
}
const app = new App();
app.play();
module.exports = App;
