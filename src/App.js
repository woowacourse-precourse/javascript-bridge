const OutputView = require("./view/OutputView");
const Controller = require("./controller/Controller");
class App {
  constructor() {
    this.controller = new Controller();
  }
  play() {
    OutputView.printStart();
    this.controller.start();
  }
}
const app = new App();
app.play();
module.exports = App;
