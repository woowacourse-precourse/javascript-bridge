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

  // TODO: 메서드 길이 10줄 이하로 줄이기
  #bridgeSizeInputPhase() {
    InputView.readBridgeSize((bridgeSize) => {
      try {
        Validator.errorIfBridgeSizeInvalid(bridgeSize);
      } catch (error) {
        OutputView.printMessage(ERROR.INVALID_BRIDGE_SIZE);
        this.#bridgeSizeInputPhase();
        return;
      }
      this.#bridgeGame = new BridgeGame(bridgeSize);
      this.#movingInputPhase();
    });
  }

  #movingInputPhase() {
    InputView.readMoving((moving) => {
      try {
        Validator.errorIfMovingInvalid(moving);
      } catch (error) {
        OutputView.printMessage(ERROR.INVALID_MOVING);
        this.#movingInputPhase();
        return;
      }
      this.#showBridgePhase(moving);
    });
  }
}

module.exports = App;
