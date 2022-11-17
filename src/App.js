const GameController = require('./GameController');

class App {
  play() {
    const controller = new GameController();
    controller.start();
  }
}

module.exports = App;
