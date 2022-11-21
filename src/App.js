const OutputView = require('./View/OutputView');
const InputView = require('./View/InputView');
const BridgeGame = require('./BridgeGame');
const { makeMapArray } = require('./util/MapMaker');
const { MOVEMENT_RESULT, COMMAND } = require('./Constants');
const Validator = require('./Validator');

class App {
  #brideGame;

  play() {
    OutputView.printStart();
    this.#readBridgeSizeStage();
  }

  #readBridgeSizeStage() {
    InputView.readBridgeSize(this.#readBridgeSizeCallback.bind(this));
  }

  #readBridgeSizeCallback(size) {
    try {
      this.#brideGame = new BridgeGame(size);
      this.#readMovingStage();
    } catch (error) {
      OutputView.print(error.message);
      this.#readBridgeSizeStage();
    }
  }

  #readMovingStage() {
    InputView.readMoving(this.#readMovingCallback.bind(this));
  }

  #readMovingCallback(movement) {
    try {
      this.#brideGame.move(movement);
      this.#printMap();
      this.#gotoNextStageAfterMoving();
    } catch (error) {
      OutputView.print(error.message);
      this.#readMovingStage();
    }
  }

  #printMap() {
    const gameState = this.#brideGame.getGameState();
    const mapArray = makeMapArray(gameState.userPath, gameState.bridge);
    OutputView.printMap(mapArray);
  }

  #gotoNextStageAfterMoving() {
    const { currentState } = this.#brideGame.getGameState();
    if (currentState === MOVEMENT_RESULT.CORRECT) this.#readMovingStage();
  }
}
module.exports = App;
