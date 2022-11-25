const BridgeGame = require('./model/BridgeGame');
const View = require('./view');
const Model = require('./model');
const BridgeController = require('./controller/BridgeController');

class App {
  #view;

  #model;

  #bridgeCntroller;

  constructor() {
    this.#view = new View();
    this.#model = new Model();
    this.#bridgeCntroller = new BridgeController(this.#view, this.#model);
  }

  play() {
    this.#bridgeCntroller.runProcess();
  }
}
const app = new App();
app.play();
module.exports = App;
