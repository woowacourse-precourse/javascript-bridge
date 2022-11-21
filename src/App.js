const BridgeGame = require('./BridgeGame');
const { MESSAGE } = require('./data/constants');
const IO = require('./IO');

class App {
  play() {
    IO.output(MESSAGE.START);
    const Game = new BridgeGame();
  }
}

module.exports = App;
