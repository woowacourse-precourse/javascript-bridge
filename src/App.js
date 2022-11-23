const Controller = require("./Controller/Controller");

class App {
  constructor() {
    this.controller = new Controller();
  }

  Start() {
    this.controller.gameStart();
  }

  play() {
    this.Start();
  }
}

const app = new App();
app.play();

module.exports = App;
