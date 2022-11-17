const Controller = require('./Controller');

class App {
  play() {
    const controller = new Controller();
    controller.handleGameStart();
  }
}

module.exports = App;
