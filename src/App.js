const Controller = require('./Controller');

class App {
  play() {
    this.controller = new Controller();
    this.controller.maker();
  }
}

const app = new App();
app.play();

module.exports = App;
