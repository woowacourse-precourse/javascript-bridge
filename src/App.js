const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');
const BridgeGame = require('./domain/BridgeGame');
const Validator = require('./Validator');
const { MESSAGE, ERROR, MOVE_RESULT, COMMAND } = require('./constant/Constant');

class App {
  #bridgeGame;
  #gameResult;

  play() {
    OutputView.printMessage(MESSAGE.GAME_START);
    this.#bridgeSizeInputPhase();
  }

  #bridgeSizeInputPhase() {
    InputView.readBridgeSize((bridgeSize) => {
      try {
        Validator.errorIfBridgeSizeInvalid(bridgeSize);
        this.#bridgeGame = new BridgeGame(bridgeSize);
        this.#movingInputPhase();
      } catch (error) {
        OutputView.printMessage(ERROR.INVALID_BRIDGE_SIZE);
        this.#bridgeSizeInputPhase();
      }
    });
  }

  #movingInputPhase() {
    InputView.readMoving((moving) => {
      try {
        Validator.errorIfMovingInvalid(moving);
        this.#showBridgePhase(moving);
      } catch (error) {
        OutputView.printMessage(ERROR.INVALID_MOVING);
        this.#movingInputPhase();
      }
    });
  }

  #showBridgePhase(moving) {
    this.#bridgeGame.move(moving);
    this.#gameResult = this.#bridgeGame.getGameResult();
    OutputView.printMap(this.#gameResult);
    this.#decideNextPhaseByRoundResult();
  }

  #decideNextPhaseByRoundResult() {
    if (this.#gameResult.roundResult === MOVE_RESULT.FAIL) {
      this.#retryCommandInputPhase();
      return;
    }
    if (this.#gameResult.roundResult === MOVE_RESULT.CLEAR) {
      this.#gameEndPhase();
      return;
    }
    this.#movingInputPhase();
  }

  #retryCommandInputPhase() {
    InputView.readGameCommand((command) => {
      try {
        Validator.errorIfGameCommandInvalid(command);
        this.#decideNextPhaseByRetryCommand(command);
      } catch (error) {
        OutputView.printMessage(ERROR.INVALID_RETRY_COMMAND);
        this.#retryCommandInputPhase();
      }
    });
  }

  #decideNextPhaseByRetryCommand(command) {
    if (command === COMMAND.RETRY) {
      this.#bridgeGame.retry();
      this.#movingInputPhase();
      return;
    }

    this.#gameEndPhase();
  }

  #gameEndPhase() {
    OutputView.printResult(this.#gameResult);
  }
}

module.exports = App;
