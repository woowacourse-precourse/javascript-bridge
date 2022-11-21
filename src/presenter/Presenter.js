const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");
const OutputView = require("../view/OutputView");
const InputView = require("../view/InputView");
const BridgeMaker = require("../BridgeMaker");
const { RETRY } = require("../view/stringsUI");
const Player = require("../model/Player");
const Bridge = require("../model/Bridge");
const Validation = require("../utils/Validation");
const {
  INPUT_TRY_FN,
  INPUT_CATCH_FN,
  RETRY_FN,
} = require("./stringsPresenter");
const BridgeGame = require("../model/BridgeGame");

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

  checkmove(selectedMove) {
    this.bridgeGameModel.move(selectedMove);
  }

  checkRetryInput(retry) {
    RETRY_FN[retry](this);
  }

  handleInput(input, InputType) {
    try {
      Validation[InputType](input);
      INPUT_TRY_FN[InputType](this, input);
    } catch (errorMsg) {
      OutputView.printError(errorMsg);
      INPUT_CATCH_FN[InputType](this);
    }
  }

  createPlayerMap() {
    const playerMap = this.bridgeGameModel.playerModel.getBridgeMap();
    OutputView.printMap(playerMap);
    this.checkContinueMove();
  }

  checkContinueMove() {
    const { isFinish, isMove } = this.bridgeGameModel.getMoveFinishBooleans();
    if (!isFinish) {
      return this.checkNextInput(isMove);
    }
    //   this.getGameCommand();
    return this.quit();
  }

  checkNextInput(isMove) {
    if (isMove) {
      return this.getPlayerMove();
    }
    return this.getGameCommand();
  }

  quit() {
    const { isFinish, isMove } = this.bridgeGameModel.getMoveFinishBooleans();
    const isSuccess = isFinish && isMove;
    OutputView.printResult({
      resultMap: this.bridgeGameModel.playerModel.getBridgeMap(),
      isSuccess,
      totalTrial: this.bridgeGameModel.playerModel.getTotalTrial(),
    });
  }
}

module.exports = Presenter;
