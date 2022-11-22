const BridgeGame = require('./Model/BridgeGame');
const Controller = require('./Controller/Controller');

class App {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }
  play() {
    Controller.play(this.bridgeGame);
  }
}
const app = new App();
app.play();
module.exports = App;
