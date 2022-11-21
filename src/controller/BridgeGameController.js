const BridgeGame = require("../BridgeGame");
const OutputView = require("../view/OutputView");
const InputView = require("../view/InputView");
const BridgeMaker = require("../BridgeMaker");
const { close } = require("../utils/utils");
const BridgegLengthValidator = require("../utils/BridgeLengthValidator");
const DirectionValidator = require("../utils/DirectionValidator");
const RegameCommandValidator = require("../utils/RegameCommandValidator");
const ValidPathBridge = require("../ValidPathBridge");

class BridgeGameController {
  constructor() {
    this.model = {
      bridgeGame: new BridgeGame(),
      validPath: new ValidPathBridge(),
    };
  }

  getBridgeLengthFromUser() {
    return InputView.readBridgeSize(this.updateBridgeAccordingInput.bind(this));
  }

  updateBridgeAccordingInput(bridgeSize) {
    this.model.validPath.size = Number(bridgeSize);
    this.isBridgeLengthValid();
    this.model.validPath.bridge = BridgeMaker.makeBridge;
    this.getMoveDirectionFromUser();
  }

  isBridgeLengthValid() {
    return this.handleError(
      () => BridgegLengthValidator.validate(this.model.validPath.size),
      this.getBridgeLengthFromUser.bind(this)
    );
  }

  getMoveDirectionFromUser() {
    this.isGameCleared() ? this.quit() : InputView.readMoving(this.move.bind(this));
  }

  isGameCleared() {
    return this.model.validPath.size === this.model.bridgeGame.myCurrentPosition;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    if (this.isDirectionValid(direction)) return;
    if (this.model.bridgeGame.move(direction, this.model.validPath.bridge)) {
      this.showMovedPath();
      return this.getMoveDirectionFromUser();
    }
    this.showMovedPath();
    return this.askUserRestart();
  }

  isDirectionValid(direction) {
    return this.handleError(
      () => DirectionValidator.validate(direction),
      this.getMoveDirectionFromUser.bind(this)
    );
  }

  askUserRestart() {
    InputView.readGameCommand(this.updateRestartOrNot.bind(this));
  }

  handleError(validator, playback) {
    try {
      validator();
    } catch (occuredError) {
      OutputView.printErrorLog(occuredError);
      playback();
      return true;
    }
  }

  updateRestartOrNot(restartStatus) {
    this.isRegameCommandValid(restartStatus);

    if (restartStatus === "R") this.retry();
    if (restartStatus === "Q") this.quit();
  }

  isRegameCommandValid(restartStatus) {
    return this.handleError(
      () => RegameCommandValidator.validate(restartStatus),
      this.askUserRestart.bind(this)
    );
  }

  showMovedPath() {
    OutputView.printMap(this.model.bridgeGame.currentMap);
  }

  quit() {
    OutputView.printResult(this.model.bridgeGame.currentMap);
    OutputView.printIsGameClear(this.isGameCleared());
    OutputView.printAttemptsCount(this.model.bridgeGame.numberOfAttempt);
    this.close();
  }

  close() {
    close();
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.model.bridgeGame.retry();
    this.getMoveDirectionFromUser();
  }
}
module.exports = BridgeGameController;
const app = new BridgeGameController();
app.getBridgeLengthFromUser();
