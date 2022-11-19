const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");
const OutputView = require("../view/OutputView");
const InputView = require("../view/InputView");
const BridgeMaker = require("../BridgeMaker");
const { RETRY } = require("../view/stringsUI");
const Player = require("../model/Player");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  bridgeModel;

  playerModel;

  totalTrial;

  constructor() {
    this.playerModel = new Player();
    this.totalTrial = 1;
  }

  start() {
    OutputView.printStart();
    this.getBridgeSize();
  }

  getBridgeSize() {
    InputView.readBridgeSize(this);
  }

  createBridgeModel(size) {
    this.bridgeModel = BridgeMaker.makeBridge({
      size,
      generateRandomNumber: this.generateRandomNumber,
    });
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
    if (!isFinish) {
      return this.checkNextInput(isMove);
    }
    return this.quit();
  }

  checkNextInput(isMove) {
    if (isMove) {
      return this.getPlayerMove();
    }
    return InputView.readGameCommand(this);
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
    this.totalTrial += 1;
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
      totalTrial: this.totalTrial,
    });
  }
}

module.exports = BridgeGame;
