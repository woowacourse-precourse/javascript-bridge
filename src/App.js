const BridgeGame = require('./Controller/BridgeGame');
const Model = require('./Model');
const View = require('./View');

class App {
  model;

  view;

  constructor() {
    this.model = new Model();
    this.view = new View();
    this.controller = new BridgeGame(this.model, this.view);
  }

  play() {
    this.controller.start();
  }
}

const app = new App();
app.play();

module.exports = App;
