const BridgeGame = require('./BridgeGame');

class App {
  bridgeGame = new BridgeGame();

  async play() {
    await this.bridgeGame.proceed();
  }
}

const app = new App();
app.play();

module.exports = App;
