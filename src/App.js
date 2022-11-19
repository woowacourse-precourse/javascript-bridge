const BridgeView = require('./view');
const BridgeModel = require('./model');
const BridgeGame = require('./controller');

class App {

  constructor() {
    this.BridgeView = new BridgeView();
    this.BridgeModel = new BridgeModel();
    this.BridgeGame = new BridgeGame(this.BridgeView,  this.BridgeModel);
  }

  play() {}
}

const app = new App()
app.play();

module.exports = App;
