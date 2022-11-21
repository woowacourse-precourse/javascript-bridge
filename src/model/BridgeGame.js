const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");
const OutputView = require("../view/OutputView");
const InputView = require("../view/InputView");
const BridgeMaker = require("../BridgeMaker");
const { RETRY } = require("../view/stringsUI");
const Player = require("./Player");
const Bridge = require("./Bridge");
const Validation = require("../utils/Validation");
const {
  INPUT_TRY_FN,
  INPUT_CATCH_FN,
} = require("../presenter/stringsPresenter");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  gamePresenter;

  bridgeModel;

  playerModel;
  constructor(gamePresenter) {
    this.gamePresenter = gamePresenter;
    this.bridgeModel = new Bridge();
    this.playerModel = new Player();
  }

  createBridgeModel(size) {
    const randomNumGenerator = BridgeRandomNumberGenerator.generate;
    const bridgeArr = BridgeMaker.makeBridge(size, randomNumGenerator);
    this.bridgeModel = new Bridge(bridgeArr);
    this.gamePresenter.getPlayerMove();
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(selectedMove) {
    const isMove = this.isMove(selectedMove);
    this.playerModel.addInputArrayItem({ selectedMove, isMove });
    this.createPlayerBridgeMap();
  }

  isMove(selectedMove) {
    const bridgeIndex = this.playerModel.getInputArrayLength();
    return this.bridgeModel.crossBridge(bridgeIndex, selectedMove);
  }

  createPlayerBridgeMap() {
    this.playerModel.createBridgeMap();
    this.gamePresenter.createPlayerMap();
  }

  getMoveFinishBooleans() {
    const currPlayerIndex = this.playerModel.getInputArrayLength() - 1;
    const isFinish = this.bridgeModel.getBridgeLength() === currPlayerIndex + 1;
    const { isMove } = this.playerModel.getInputArrayItem(currPlayerIndex);
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
    this.gamePresenter.getPlayerMove();
  }
}

module.exports = BridgeGame;
