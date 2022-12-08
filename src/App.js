const Controller = require('./Controller');
const outputView = require('./OutputView');

class App {
  play() {
    outputView.printBegin();
    this.controller = new Controller();
    this.controller.maker();
  }
}

const app = new App();
app.play();

module.exports = App;
