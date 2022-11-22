const Controller = require("./GameController")
const controller = new Controller;

class App {
  play() {
    controller.start();
  }
}

const app = new App();
app.play();

module.exports = App;