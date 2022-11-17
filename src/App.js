const GameController = require('./controller/GameController');

class App {
  play() {
    this.game = new GameController();
    this.game.start();
  }
}

const app = new App();
app.play();

module.exports = App;
