const BridgeGame = require('./Controllers/BridgeGame');
const Model = require('./Models/Model');
const GameView = require('./Views/GameView');
const InputView = require('./Views/InputView');
const OutputView = require('./Views/OutputView');

class App {
  constructor() {
    this.model = new Model();
    this.view = new GameView(new InputView(), new OutputView());
    this.controller = new BridgeGame(this.model, this.view);
  }

  play() {
    this.controller.start();
  }
}

module.exports = App;
