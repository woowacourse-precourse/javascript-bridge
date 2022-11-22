const GameController = require("./Controller/GameController");

class App {
  constructor() {
    this.controller = new GameController();
  }

  play() {
    this.controller.startGame();
  }
}

module.exports = App;

//TODO: 구현 후 삭제
const app = new App();
app.play();
