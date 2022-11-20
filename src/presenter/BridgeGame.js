const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");
const OutputView = require("../view/OutputView");
const InputView = require("../view/InputView");
const BridgeMaker = require("../BridgeMaker");
const { RETRY } = require("../view/stringsUI");
const Player = require("../model/Player");
const Bridge = require("../model/Bridge");
const Validation = require("../utils/Validation");
const HandleError = require("../utils/HandleInputError");
const { ERROR_TYPE } = require("../utils/stringsUtils");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  bridgeModel;

  playerModel;

  constructor() {
    this.playerModel = new Player();
  }

  start() {
    OutputView.printStart();
    this.getBridgeSize();
  }

  getBridgeSize() {
    InputView.readBridgeSize(this);
  }

  handleReadBridgeSize(size) {
    try {
      Validation.inputSize(size);
      this.createBridgeModel(size);
    } catch (errorMsg) {
      HandleError.input(this, ERROR_TYPE.SIZE, errorMsg);
    }
  }

  handleReadMoving(selectedMove) {
    try {
      Validation.inputMove(selectedMove);
      this.move(selectedMove);
    } catch (errorMsg) {
      HandleError.input(this, ERROR_TYPE.MOVING, errorMsg);
    }
  }

  handleReadGameCommand(retry) {
    try {
      Validation.inputRetry(retry);
      this.checkRetryInput(retry);
    } catch (errorMsg) {
      HandleError.input(this, ERROR_TYPE.GAME_COMMAND, errorMsg);
    }
  }

  createBridgeModel(size) {
    const bridgeArr = BridgeMaker.makeBridge(size, this.generateRandomNumber);
    this.bridgeModel = new Bridge(bridgeArr);
    this.getPlayerMove();
  }

  getPlayerMove() {
    InputView.readMoving(this);
  }

  generateRandomNumber() {
    return BridgeRandomNumberGenerator.generate();
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(selectedMove) {
    const isMove = this.bridgeModel.crossBridge({
      bridgeIndex: this.playerModel.inputArr.length,
      selectedMove,
    });
    this.playerModel.inputArr.push({ selectedMove, isMove });
    this.createPlayerBridgeMap();
  }

  createPlayerBridgeMap() {
    this.playerModel.createBridgeMap(this);
  }

  printMove() {
    OutputView.printMap(this, this.playerModel.bridgeMap);
  }

  checkNextMove() {
    const { isFinish, isMove } = this.getMoveFinishBooleans();
    console.log(isFinish, isMove);
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

  getGameCommand() {
    InputView.readGameCommand(this);
  }

  getMoveFinishBooleans() {
    const currPlayerIndex = this.playerModel.inputArr.length - 1;
    const isFinish = this.bridgeModel.createdArr.length === currPlayerIndex + 1;
    const { isMove } = this.playerModel.inputArr[currPlayerIndex];
    return { isFinish, isMove };
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.playerModel.addTotalTrial();
    this.playerModel.resetPlayer();
    this.getPlayerMove();
  }

  checkRetryInput(retry) {
    if (RETRY[retry]) {
      this.retry();
    } else {
      this.quit();
    }
  }

  quit() {
    const { isFinish, isMove } = this.getMoveFinishBooleans();
    const isSuccess = isFinish && isMove;
    OutputView.printResult({
      resultMap: this.playerModel.bridgeMap,
      isSuccess,
      totalTrial: this.playerModel.getTotalTrial(),
    });
  }

  handleReadBridgeSizeError(error) {
    OutputView.printError(error);
    this.getBridgeSize();
  }
  handleReadMovingError(error) {
    OutputView.printError(error);
    this.getPlayerMove();
  }
  handleReadGameCommandError(error) {
    OutputView.printError(error);
    this.getGameCommand();
  }
}

module.exports = BridgeGame;
