const GameController = require("./GameController");

class App {
  play() {
    new GameController();
  }
}

const app = new App();
app.play();

module.exports = App;
