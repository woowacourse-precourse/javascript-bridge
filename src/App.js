const BridgeGame = require('./BridgeGame');
const { MESSAGE } = require('./data/constants');
const IO = require('./IO');

class App {
  constructor() {
    IO.output(MESSAGE.START);
    this.game = new BridgeGame();
  }

  play() {
    this.game.init();
  }
}

const app = new App();
app.play();

module.exports = App;
