const Controller = require('./Controller');

class App {
  constructor () {
    this.controller = new Controller();
  }
  play() {
    this.controller.maker();
  }
}

const app = new App();
app.play();

module.exports = App;
