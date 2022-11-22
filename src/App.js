const Controller = require("./Controller");
const controller = new Controller;

class App {
  play() {
    controller.start();
  }
}

const app = new App();
app.play();

module.exports = App;