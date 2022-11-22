const GameController = require('./Controller/GameController');

class App {
  #gameController = new GameController();

  play() {
    this.#gameController.gameStart();
  }
}

const app = new App();
app.play();

module.exports = App;
