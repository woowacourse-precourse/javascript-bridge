const InputView = require("./InputView");
const Controller = require("./Controller");
class App {
  constructor() {
    this.controller = new Controller();
  }
  play() {
    this.controller.start();
  }
}
const app = new App();
app.play();
module.exports = App;
