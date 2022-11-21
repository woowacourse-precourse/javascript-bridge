const BridgeGameController = require('./BridgeGameController');

class App {
  play() {
    const gameController = new BridgeGameController();
    gameController.start();
  }
}
const app = new App();
app.play();
module.exports = App;
