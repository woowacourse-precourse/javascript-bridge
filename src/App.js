const Controller = require("./controller");
const controller = new Controller;

class App {
  play() {
    controller.start();
  }
}

module.exports = App;