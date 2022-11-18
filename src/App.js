const BridgeGame = require('./BridgeGame');

class App {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  play() {
    this.bridgeGame.init();
  }
}

/* 아래는 삭제해야 할 부분 */
const app = new App();
app.play();

module.exports = App;
