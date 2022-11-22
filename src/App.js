const MissionUtils = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const inputView = require('./inputView');
const outputView = require('./outputView');

class App {
  #bridgeGame
  #isOngoing

  constructor() {
    this.#bridgeGame;
    this.#isOngoing = true;
  }

  play() {
    outputView.printStart();
    this.makeReadBridgeSize();
  }

  makeReadBridgeSize() {
    inputView.readBridgeSize.call(this,this.generateBridge);
  }

  generateBridge(size) {
    this.#bridgeGame = new BridgeGame(size);
    this.validateSizeInput(size);
    this.makeReadMoving.call(this);
  }

  validateSizeInput(size) {
    this.#bridgeGame.validateSize.call(this, size, this.makeReadBridgeSize);
  }

  makeReadMoving() {
    inputView.readMoving.call(this, this.validateUserSelect);
  }

  validateUserSelect(userSelect) {
    const validateResult = this.#bridgeGame.validateMoveInput.call(this, userSelect, this.makeReadMoving);
    if (validateResult === true) {
      this.makeMovement(userSelect);
    };
  }

  makeMovement(userSelect) {
    const moveResult = this.#bridgeGame.move(userSelect);
    this.#isOngoing = moveResult[0];
    const moveData = moveResult[1];

    this.deliverMapToPrint(moveData);
    if (this.checkFinish() === true) return;
    this.checkOngoing();
  }

  deliverMapToPrint(moveData) {
    const map = outputView.readyToPrintMap(moveData);
    this.resultMap = outputView.printMap(map);
  }

  checkOngoing () {
    if (this.#isOngoing === true) return this.makeReadMoving();
    if (this.#isOngoing === false) return this.makeReadCommand();
  }

  checkFinish() {
    const remainBridge = this.#bridgeGame.remainBridge;
    const remainLength = remainBridge.length;

    if (remainLength === 0 && this.#isOngoing === true) {
      MissionUtils.Console.close();
      this.readyToPrintResult();
      return true;
    }  
  }

  makeReadCommand() {
    inputView.readGameCommand.call(this, this.validateUserCommand);
  }

  validateUserCommand(userCommand) {
    const validateResult = this.#bridgeGame.validateRetry.call(this, userCommand, this.makeReadCommand);
    if (validateResult === true) {
      return this.makeRetryOrQuit(userCommand);
    };
  }

  makeRetryOrQuit(userCommand) {
    if (userCommand === 'R'){
      this.#bridgeGame.retry();
      return this.makeReadMoving.call(this);
    };
    MissionUtils.Console.close();
    return this.readyToPrintResult()
  }

  readyToPrintResult() {
    const tryCount = this.#bridgeGame.tryCount;
    outputView.printResult(this.#isOngoing, tryCount, this.resultMap);
  }
}
const app = new App();
app.play();

module.exports = App;