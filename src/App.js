const { Controller } = require("./controller");

class App {
  play() {
    const controller = new Controller();
    controller.start();
  }
}

const app = new App();
app.play();

module.exports = App;
