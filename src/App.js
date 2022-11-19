const BridgeGame = require('./BridgeGame');
const inputView = require('./inputView');
const outputView = require('./outputView');

class App {
  #bridgeGame

  constructor() {
    this.#bridgeGame;
  }

  play() {
    outputView.printStart();
    inputView.readBridgeSize.call(this,this.generateBridge,this.makeMovement);
  }

  generateBridge(size, callbackMakeMovement) {
    this.#bridgeGame = new BridgeGame(size);
    this.bridge = this.#bridgeGame.bridge;

    outputView.printMap(this.bridge);
    return callbackMakeMovement.call(this);
  }

  makeMovement() {
    const validate = this.#bridgeGame.validateMoveInput;
    inputView.readMoving.call(this, validate, this.#bridgeGame.move);
  }
}

const app = new App();
app.play();


module.exports = App;
