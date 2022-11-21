const GameController = require("./GameController");

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
