const Controller = require('./Controller');

class App {
  play() {
    const game = new Controller();
    game.startGame();
  }
}

module.exports = App;

const app = new App();
app.play();