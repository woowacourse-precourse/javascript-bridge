const Controller  = require('./controller/Controller');

class App {
  constructor() {
    this.controller = new Controller();
  }

  play() {
    this.controller.play();
  }
}

module.exports = App;
