const GameManager = require('./GameManager.js');

class App {
  play() {
    const gameManager = new GameManager();
    gameManager.gameStart();
  }
}

const app = new App();
app.play();

module.exports = App;
