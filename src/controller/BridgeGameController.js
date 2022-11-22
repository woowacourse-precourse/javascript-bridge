const BridgeGame = require("../BridgeGame");
const OutputView = require("../view/OutputView");
const InputView = require("../view/InputView");
const { close } = require("../utils/utils");
const BridgegLengthValidator = require("../utils/BridgeLengthValidator");
const DirectionValidator = require("../utils/DirectionValidator");
const RegameCommandValidator = require("../utils/RegameCommandValidator");
const ValidPathBridge = require("../AnswerBridgeModel");
const { STATUS } = require("../constants/message");

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
    if (this.isBridgeLengthNotValid()) return this.getBridgeLengthFromUser();
    this.model.validPath.setAnswerBridge();
    this.getMoveDirectionFromUser();
  }

  isBridgeLengthNotValid() {
    return !BridgegLengthValidator.validate(this.model.validPath.size);
  }

  getMoveDirectionFromUser() {
    this.isGameCleared() ? this.quit() : InputView.readMoving(this.updateUserMovement.bind(this));
  }

  isGameCleared() {
    return this.model.validPath.size === this.model.bridgeGame.myCurrentPosition;
  }

  updateUserMovement(direction) {
    if (this.isDirectionNotValid(direction)) return this.getMoveDirectionFromUser();
    if (this.model.bridgeGame.move(direction, this.model.validPath.getbridge())) {
      this.showMovedPath();
      return this.getMoveDirectionFromUser();
    }
    this.showMovedPath();
    return this.askUserRestart();
  }

  isDirectionNotValid(direction) {
    return !DirectionValidator.validate(direction);
  }

  askUserRestart() {
    InputView.readGameCommand(this.updateRestartOrNot.bind(this));
  }

  updateRestartOrNot(restartStatus) {
    if (this.isRegameCommandNotValid(restartStatus)) this.askUserRestart();
    if (restartStatus === STATUS.HOPE_RESTART) this.regame();
    if (restartStatus === STATUS.HOPE_QUIT) this.quit();
  }

  isRegameCommandNotValid(restartStatus) {
    return !RegameCommandValidator.validate(restartStatus);
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

  regame() {
    this.model.bridgeGame.retry();
    this.getMoveDirectionFromUser();
  }
}
module.exports = BridgeGameController;
const app = new BridgeGameController();
app.getBridgeLengthFromUser();
