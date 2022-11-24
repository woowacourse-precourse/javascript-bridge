const OutputView = require("../view/OutputView");
const InputView = require("../view/InputView");
const Validation = require("../validation/Validation");
const {
  INPUT_TRY_FN,
  INPUT_CATCH_FN,
  RETRY_FN,
  PLAYER_STATE_FN,
  PLAYER_STATE,
} = require("./constantsPresenter");
const BridgeGame = require("../model/BridgeGame");
const { trimString } = require("../view/stringsUI");

class Presenter {
  bridgeGameModel;

  constructor() {
    this.bridgeGameModel = new BridgeGame(this);
  }

  init() {
    OutputView.printStart();
    this.getBridgeSize();
  }

  // INPUT_CATCH_FN
  getBridgeSize() {
    InputView.readBridgeSize(this);
  }

  getPlayerMove() {
    InputView.readMoving(this);
  }

  getGameCommand() {
    InputView.readGameCommand(this);
  }

  //INPUT_TRY_FN
  createBridge(size) {
    OutputView.printLineBreak();
    this.bridgeGameModel.createBridgeModel(size);
  }

  checkMove(selectedMove) {
    this.bridgeGameModel.move(selectedMove);
  }

  checkRetryInput(retry) {
    RETRY_FN[retry](this);
  }

  // Control InputView
  handleInput(input, inputType) {
    let trimedInput = trimString(input);
    try {
      const valInput = Validation[inputType](trimedInput);
      INPUT_TRY_FN[inputType](this, valInput);
    } catch (errorMsg) {
      OutputView.printError(errorMsg);
      INPUT_CATCH_FN[inputType](this);
    }
  }

  // Control Model
  createPlayerMap() {
    const playerMap = this.bridgeGameModel.getPlayerBridgeMap();
    OutputView.printMap(playerMap);
    this.checkContinueMove();
  }

  checkContinueMove() {
    const playerState = this.bridgeGameModel.getPlayerState();
    PLAYER_STATE_FN[playerState](this);
  }

  retryGame() {
    this.bridgeGameModel.retry();
  }

  quitGame() {
    const resultMap = this.bridgeGameModel.getPlayerBridgeMap();
    const isSuccess =
      this.bridgeGameModel.getPlayerState() === PLAYER_STATE.SUCCESS;
    const totalTrial = this.bridgeGameModel.getPlayerTotalTrial();
    OutputView.printResult(resultMap, isSuccess, totalTrial);
  }
}

module.exports = Presenter;
