const { Console } = require('@woowacourse/mission-utils');
const { makeBridge } = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');
const { GAME_OUTCOME, GAME_COMMAND } = require('../Constants');
const { readBridgeSize, readMoving, readGameCommand } = require('../View/InputView');
const { checkBridgeSize, checkMovingValue, checkRestartOrDone } = require('../UserInput/Validation');
const BridgeGame = require('../BridgeGame/BridgeGame');

class InputHandling {
  #answerBridgeArray;
  #bridgeGame;

  play() {
    readBridgeSize(this.handleBridgeSize.bind(this));
  }

  handleBridgeSize(size) {
    try {
      checkBridgeSize(size);
      this.generateAnswerBridge(size);
    } catch (error) {
      Console.print(error);
      readBridgeSize(this.handleBridgeSize.bind(this));
    }
  }

  generateAnswerBridge(size) {
    this.#answerBridgeArray = makeBridge(size, generate);
    this.#bridgeGame = new BridgeGame(this.#answerBridgeArray);
    readMoving(this.handleMovingValue.bind(this));
  }

  handleMovingValue(direction) {
    try {
      checkMovingValue(direction);
      this.decideNextConsolePrint(direction);
    } catch (error) {
      Console.print(error);
      readMoving(this.handleMovingValue.bind(this));
    }
  }

  decideNextConsolePrint(direction) {
    const gameOutcome = this.#bridgeGame.decideMoveOrStop(direction);
    if (gameOutcome === GAME_OUTCOME.FAIL) readGameCommand(this.handleGameCommand.bind(this));
    if (gameOutcome === GAME_OUTCOME.FINAL_SUCCESS) Console.close();
    if (gameOutcome === GAME_OUTCOME.SUCCESS) readMoving(this.handleMovingValue.bind(this));
  }

  handleGameCommand(command) {
    try {
      checkRestartOrDone(command);
      this.decideRetryOrDone(command);
    } catch (error) {
      Console.print(error);
      readGameCommand(this.handleGameCommand.bind(this));
    }
  }

  decideRetryOrDone(command) {
    if (command === GAME_COMMAND.RESTART) {
      this.#bridgeGame.retry();
      readMoving(this.handleMovingValue.bind(this));
    }
    if (command === GAME_COMMAND.QUIT) {
      this.#bridgeGame.quit();
      Console.close();
    }
  }
}

module.exports = InputHandling;
