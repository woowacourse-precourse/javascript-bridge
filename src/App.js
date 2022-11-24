const OutputView = require('./View/OutputView');
const InputView = require('./View/InputView');
const BridgeGame = require('./BridgeGame');
const { makeMapArray } = require('./util/MapMaker');
const { MOVEMENT_RESULT, COMMAND } = require('./Constants');

class App {
  #brideGame;

  play() {
    OutputView.printStart();
    this.#readBridgeSizeStage();
  }

  #readBridgeSizeStage() {
    InputView.readBridgeSize((size) => {
      this.#brideGame = new BridgeGame(size);
      this.#readMovingStage();
    });
  }

  #readMovingStage() {
    InputView.readMoving((movement) => {
      this.#brideGame.move(movement);
      this.#printMap();
      this.#gotoNextStageAfterMoving();
    });
  }

  #printMap() {
    const gameState = this.#brideGame.getGameState();
    const mapArray = makeMapArray(gameState.userPath, gameState.bridge);
    OutputView.printMap(mapArray);
  }

  #gotoNextStageAfterMoving() {
    const { currentState } = this.#brideGame.getGameState();
    if (currentState === MOVEMENT_RESULT.GAME_SUCCESS) this.#quitGame();
    if (currentState === MOVEMENT_RESULT.CORRECT) this.#readMovingStage();
    if (currentState === MOVEMENT_RESULT.WRONG) this.#selectRetryStage();
  }

  #selectRetryStage() {
    InputView.readGameCommand((command) => {
      if (command === COMMAND.QUIT) this.#quitGame();
      if (command === COMMAND.RETRY) {
        this.#brideGame.retry();
        this.#readMovingStage();
      }
    });
  }

  #quitGame() {
    const {
      currentState, userPath, bridge, attempts,
    } = this.#brideGame.getGameState();
    const mapArray = makeMapArray(userPath, bridge);
    OutputView.printResult(currentState, mapArray, attempts);
    OutputView.close();
  }
}
const app = new App();
app.play();

module.exports = App;
