// const BridgeGame = require('./BridgeGame');
const Controller = require('./Controller');

class App {
  constructor() {
    this.controller = new Controller();
  }

  play() {
    this.controller.init();
  }
}

// REMOVE:
const app = new App();
app.play();

module.exports = App;
