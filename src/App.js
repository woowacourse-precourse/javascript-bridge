const GameController = require('./GameController.js');

class App {
  constructor() {
    this.gameController = new GameController();
  }

  play() {
    this.gameController.play();
  }
}

const app = new App();
app.play();

module.exports = App;
