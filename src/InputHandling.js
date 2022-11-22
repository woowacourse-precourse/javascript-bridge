const { Console } = require('@woowacourse/mission-utils');
const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const { GAME_OUTCOME, GAME_COMMAND } = require('./Constants');
const InputView = require('./InputView');
const Validation = require('./Validation');
const BridgeGame = require('./BridgeGame');

class InputHandling {
  #answerBridgeArray;
  #bridgeGame;

  play() {
    InputView.readBridgeSize(this.handleBridgeSize.bind(this));
  }

  handleBridgeSize(size) {
    try {
      Validation.checkBridgeSize(size);
      this.generateAnswerBridge(size);
    } catch (error) {
      Console.print(error);
      InputView.readBridgeSize(this.handleBridgeSize.bind(this));
    }
  }

  generateAnswerBridge(size) {
    this.#answerBridgeArray = makeBridge(size, generate);
    this.#bridgeGame = new BridgeGame(this.#answerBridgeArray);
    InputView.readMoving(this.handleMovingValue.bind(this));
  }

  handleMovingValue(direction) {
    try {
      Validation.checkMovingValue(direction);
      this.decideNextConsolePrint(direction);
    } catch (error) {
      Console.print(error);
      InputView.readMoving(this.handleMovingValue.bind(this));
    }
  }

  decideNextConsolePrint(direction) {
    const gameOutcome = this.#bridgeGame.decideMoveOrStop(direction);
    if (gameOutcome === GAME_OUTCOME.FAIL)
      InputView.readGameCommand(this.handleGameCommand.bind(this));
    if (gameOutcome === GAME_OUTCOME.FINAL_SUCCESS) 
      Console.close();
    if (gameOutcome === GAME_OUTCOME.SUCCESS)
      InputView.readMoving(this.handleMovingValue.bind(this));
  }

  handleGameCommand(command) {
    try {
      Validation.checkRestartOrDone(command);
      this.decideRetryOrDone(command);
    } catch (err) {
      Console.print(err);
      InputView.readGameCommand(this.handleGameCommand.bind(this));
    }
  }

  decideRetryOrDone(command) {
    if (command === GAME_COMMAND.RESTART) {
      this.#bridgeGame.retry();
      InputView.readMoving(this.handleMovingValue.bind(this));
    }
    if (command === GAME_COMMAND.QUIT) {
      this.#bridgeGame.quit();
      Console.close();
    }
  }
}

module.exports = InputHandling;
