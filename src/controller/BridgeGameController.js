const BridgeGame = require("../BridgeGame");
const OutputView = require("../view/OutputView");
const InputView = require("../view/InputView");
const { close } = require("../utils/utils");
const BridgegLengthValidator = require("../utils/BridgeLengthValidator");
const DirectionValidator = require("../utils/DirectionValidator");
const RegameCommandValidator = require("../utils/RegameCommandValidator");
const BridgeAnswerPath = require("../BridgeAnswerGenerator");
const { STATUS, STATE } = require("../constants/message");
const BridgeMap = require("../BridgeMap");

class BridgeGameController {
  constructor() {
    this.model = {
      bridgeGame: new BridgeGame(),
      answerBridge: new BridgeAnswerPath(),
      bridgeMap: new BridgeMap(),
    };
  }

  updateBridgeLengthFromUser() {
    return InputView.readBridgeSize(this.#updateAnswerBridgeAccordingInput.bind(this));
  }

  #updateAnswerBridgeAccordingInput(bridgeSize) {
    this.#updateAnswerBridgeSize(bridgeSize);
    this.#updateAnswerBridgePath();
  }

  #updateAnswerBridgeSize(bridgeSize) {
    this.model.answerBridge.size = Number(bridgeSize);
  }

  #updateAnswerBridgePath() {
    if (this.#isBridgeLengthNotValid()) return this.updateBridgeLengthFromUser();
    this.model.answerBridge.buildBridge();
    this.updateMoveDirectionFromUser();
  }

  #isBridgeLengthNotValid() {
    return !BridgegLengthValidator.validate(this.model.answerBridge.size);
  }

  updateMoveDirectionFromUser() {
    this.#isGameCleared()
      ? this.#quit()
      : InputView.readMoving(this.#updateUserMovement.bind(this));
  }

  #isGameCleared() {
    return this.model.answerBridge.size === this.model.bridgeGame.getMyCurrentPosition();
  }

  #updateUserMovement(direction) {
    if (this.#isDirectionNotValid(direction)) return this.updateMoveDirectionFromUser();
    if (this.model.bridgeGame.move(direction, this.model.answerBridge.getbridge())) {
      this.model.bridgeMap.updateMyPositionForward(direction, STATE.VALID.symbol);
      return this.#showMovedPath().updateMoveDirectionFromUser();
    }
    this.model.bridgeMap.updateMyPositionForward(direction, STATE.NOT_VALID.symbol);
    return this.#showMovedPath().#askUserRestart();
  }

  #isDirectionNotValid(direction) {
    return !DirectionValidator.validate(direction);
  }

  #askUserRestart() {
    InputView.readGameCommand(this.#updateRestartOrNot.bind(this));
  }

  #updateRestartOrNot(restartStatus) {
    if (this.#isRegameCommandNotValid(restartStatus)) this.#askUserRestart();
    if (restartStatus === STATUS.HOPE_RESTART) this.#regame();
    if (restartStatus === STATUS.HOPE_QUIT) this.#quit();
  }

  #isRegameCommandNotValid(restartStatus) {
    return !RegameCommandValidator.validate(restartStatus);
  }

  #showMovedPath() {
    OutputView.printMap(this.model.bridgeMap.getMyBridgeMap());
    return this;
  }

  #notifyGameResult() {
    OutputView.printResult(this.model.bridgeMap.getMyBridgeMap());
    OutputView.printIsGameClear(this.#isGameCleared());
    OutputView.printAttemptsCount(this.model.bridgeGame.getNumberOfAttempt());
  }

  #quit() {
    this.#notifyGameResult();
    this.#close();
  }

  #close() {
    close();
  }

  #regame() {
    this.model.bridgeGame.retry();
    this.model.bridgeMap.init();
    this.updateMoveDirectionFromUser();
  }
}
module.exports = BridgeGameController;
