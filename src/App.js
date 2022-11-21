const MissionUtils = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const inputView = require('./inputView');
const outputView = require('./outputView');

class App {
  #bridgeGame
  #isOngoing

  constructor() {
    this.#bridgeGame;
    this.#isOngoing;
  }

  play() {
    outputView.printStart();
    inputView.readBridgeSize.call(this,this.generateBridge);
  }

  generateBridge(size) {
    this.#bridgeGame = new BridgeGame(size);
    this.makeReadMoving.call(this);
  }

  makeReadMoving() {
    const validate = this.#bridgeGame.validateMoveInput;
    this.#isOngoing = true;

    inputView.readMoving.call(this, validate, this.makeMovement);
  }

  makeMovement(userSelect) {
    const moveResult = this.#bridgeGame.move(userSelect);
    this.#isOngoing = moveResult[0];
    const moveData = moveResult[1];

    this.deliverMapToPrint(moveData);
    this.checkOngoing();
  }

  deliverMapToPrint(moveData) {
    const map = this.#bridgeGame.readyToPrintMap(moveData);
    this.resultMap = outputView.printMap(map);
  }

  checkOngoing () {
    if (this.#isOngoing === true) return this.makeReadMoving();
    if (this.#isOngoing === false) return this.makeReadCommand();
  }

  makeReadCommand() {
    const validate = this.#bridgeGame.validateRetry;
    inputView.readGameCommand.call(this, validate, this.makeRetryOrQuit);
  }
}

const app = new App();
app.play();


module.exports = App;