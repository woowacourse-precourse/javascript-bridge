const { STATE } = require('./constant/Constant');
const Controller = require('./controller/Controller');

class App {
  constructor() {
    this.controller = new Controller();
  }

  play() {
    this.controller.flow(STATE.START);
  }
}

module.exports = App;
