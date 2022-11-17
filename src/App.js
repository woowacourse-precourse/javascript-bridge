const GameController = require("./GameController");

class App {
  play() {
    const gameController = new GameController();
    gameController.play();
  }
}
const app = new App();
app.play();
module.exports = App;
