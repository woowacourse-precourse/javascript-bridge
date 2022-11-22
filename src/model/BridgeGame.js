const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");
const BridgeMaker = require("../BridgeMaker");
const Player = require("./Player");
const Bridge = require("./Bridge");
const { createPlayerState } = require("../presenter/constantsPresenter");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #gamePresenter;

  #bridgeModel;

  #playerModel;
  constructor(gamePresenter) {
    this.#gamePresenter = gamePresenter;
    this.#bridgeModel = new Bridge();
    this.#playerModel = new Player();
  }

  createBridgeModel(size) {
    const bridgeArr = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
    this.setBridgeModel(bridgeArr);
  }
  setBridgeModel(bridgeArr) {
    this.#bridgeModel = new Bridge(bridgeArr);
    this.#gamePresenter.getPlayerMove();
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(selectedMove) {
    const currMoveResult = this.getCurrMoveResult(selectedMove);
    this.#playerModel.addInputArrayItem(currMoveResult);
    this.createPlayerBridgeMap();
  }

  getCurrMoveResult(selectedMove) {
    const currIndex = this.#playerModel.getInputArrayLength();
    const isCrossBridge = this.#bridgeModel.crossBridge(
      currIndex,
      selectedMove
    );
    return { selectedMove, isCrossBridge };
  }

  createPlayerBridgeMap() {
    this.#playerModel.createBridgeMap();
    this.#gamePresenter.createPlayerMap();
  }

  getMoveFinishBooleans() {
    const currPlayerIndex = this.#playerModel.getInputArrayLength() - 1;
    const isFinish =
      this.#bridgeModel.getBridgeLength() === currPlayerIndex + 1;
    const { isCrossBridge: isMove } =
      this.#playerModel.getInputArrayItem(currPlayerIndex);
    return { isFinish, isMove };
  }

  getPlayerState() {
    const { isFinish, isMove } = this.getMoveFinishBooleans();
    const playerState = createPlayerState(isFinish, isMove);
    return playerState;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#playerModel.addTotalTrial();
    this.#playerModel.resetPlayer();
    this.#gamePresenter.getPlayerMove();
  }

  getPlayerBridgeMap() {
    return this.#playerModel.getBridgeMap();
  }
  getPlayerTotalTrial() {
    return this.#playerModel.getTotalTrial();
  }
}

module.exports = BridgeGame;
