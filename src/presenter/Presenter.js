const OutputView = require("../view/OutputView");
const InputView = require("../view/InputView");
const Validation = require("../utils/Validation");
const {
  INPUT_TRY_FN,
  INPUT_CATCH_FN,
  RETRY_FN,
  PLAYER_STATE_FN,
  PLAYER_STATE,
} = require("./constantsPresenter");
const BridgeGame = require("../model/BridgeGame");

class Presenter {
  #bridgeGameModel;

  constructor() {
    this.#bridgeGameModel = new BridgeGame(this);
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
    this.#bridgeGameModel.createBridgeModel(size);
  }

  checkmove(selectedMove) {
    this.#bridgeGameModel.move(selectedMove);
  }

  checkRetryInput(retry) {
    RETRY_FN[retry](this);
  }

  // Control InputView
  handleInput(input, InputType) {
    try {
      Validation[InputType](input);
      INPUT_TRY_FN[InputType](this, input);
    } catch (errorMsg) {
      OutputView.printError(errorMsg);
      INPUT_CATCH_FN[InputType](this);
    }
  }

  // Control Model
  createPlayerMap() {
    const playerMap = this.#bridgeGameModel.getPlayerBridgeMap();
    OutputView.printMap(playerMap);
    this.checkContinueMove();
  }

  checkContinueMove() {
    const playerState = this.#bridgeGameModel.getPlayerState();
    PLAYER_STATE_FN[playerState](this);
  }

  quit() {
    const isSuccess =
      this.#bridgeGameModel.getPlayerState() === PLAYER_STATE.SUCCESS;
    OutputView.printResult({
      resultMap: this.#bridgeGameModel.getPlayerBridgeMap(),
      isSuccess,
      totalTrial: this.#bridgeGameModel.getPlayerTotalTrial(),
    });
  }
}

module.exports = Presenter;
