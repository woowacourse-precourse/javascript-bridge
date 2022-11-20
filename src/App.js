const MissionUtils = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const inputView = require('./inputView');
const outputView = require('./outputView');

class App {
  #bridgeGame
  #remainBridge;
  #isOngoing

  constructor() {
    this.#bridgeGame;
    this.#remainBridge;
    this.#isOngoing;
  }

  play() {
    outputView.printStart();
    inputView.readBridgeSize.call(this,this.generateBridge,this.makeReadMoving);
  }

  generateBridge(size, callbackmakeReadMoving) {
    this.#bridgeGame = new BridgeGame(size);
    this.#remainBridge = this.#bridgeGame.bridge
    this.bridgeLength = this.#remainBridge.length

    callbackmakeReadMoving.call(this);
  }

  makeReadMoving() {
    const validate = this.#bridgeGame.validateMoveInput;
    this.#isOngoing = true;

    inputView.readMoving.call(this, validate, this.makeMovement);
  }

  makeMovement(userSelect) {
    const moveResult = this.#bridgeGame.move(userSelect, this.#remainBridge);
    this.#isOngoing = moveResult[0];
    this.#remainBridge = moveResult[1];
    const moveData = moveResult[2];

    this.deliverMapToPrint(moveData);
    this.checkFinish();
    this.checkOngoing();
  }

  deliverMapToPrint() {
    const map = this.#bridgeGame.readyToPrintMap(moveData);
    outputView.printMap(map);
  }

  checkOngoing () {
    if (this.#isOngoing === true) return this.makeReadMoving();
    if (this.#isOngoing === false) return this.makeReadCommand();
  }

  checkFinish() {
    if (this.#remainBridge.length === 0) {
      MissionUtils.Console.close();
      return this.readyToPrintResult();
    }  
  }


  makeReadCommand() {

  }

  readyToPrintResult() {
    outputView.printResult();
  }
}

const app = new App();
app.play();


module.exports = App;
