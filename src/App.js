const Controller = require("./Controller");
const controller = new Controller;

class App {
  play() {
    controller.start();
  }
}

module.exports = App;