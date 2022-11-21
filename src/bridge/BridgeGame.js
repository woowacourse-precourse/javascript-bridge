const OutputView = require("../views/OutputView");
const Validator = require("../utils/Validator");
const GameStates = require("../utils/GameStates");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  static NOT_PASS = "X";
  static PASS = "O";

  #bridge;
  #bridgeMaker;
  #bridgeMapMaker;

  #numberOfAttemps = 0;
  #distance = 0;
  #isGameFailed = false;
  #isGameSucess = false;

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  constructor(bridgeMaker, bridgeMapMaker) {
    this.#numberOfAttemps++;
    this.#bridgeMaker = bridgeMaker;
    this.#bridgeMapMaker = bridgeMapMaker;
  }

  buildBridge(size, generate) {
    if (this.#bridge) return;
    this.#bridge = this.#bridgeMaker.makeBridge(size, generate);
  }

  getGameState() {
    if (this.#isGameFailed) return GameStates.GAME_FAILED;
    if (this.#isGameSucess) return GameStates.GAME_SUCCESS;

    return null;
  }

  getNumberOfAttemps() {
    return this.#numberOfAttemps;
  }

  move(direction) {
    Validator.isValidDirection(direction);
    if (this.#distance === this.#bridge.length - 1) {
      this.#isGameSucess = true;
    }
    const block = this.#bridge[this.#distance++];
    const isPlaceToPass = this.isPlaceToPass(block, direction);
    this.pass(isPlaceToPass, block, direction);
    this.afterMove(direction, isPlaceToPass, this.#distance);
  }

  pass(isPlaceToPass) {
    if (isPlaceToPass === BridgeGame.NOT_PASS) {
      this.#isGameFailed = true;
    }
  }

  afterMove(direction, isPlaceToPass, distance) {
    const map = this.#bridgeMapMaker.makeMap(
      direction,
      isPlaceToPass,
      distance
    );

    OutputView.printMap(map);
  }

  getCurrentMap() {
    return this.#bridgeMapMaker.getCurrentMap();
  }

  isPlaceToPass(block, direction) {
    return direction === block ? BridgeGame.PASS : BridgeGame.NOT_PASS;
  }

  onGameEnded(onSuccess, onFail) {
    const state = this.getGameState();
    switch (state) {
      case GameStates.GAME_FAILED:
        onFail(this);
        break;
      case GameStates.GAME_SUCCESS:
        onSuccess(this);
        break;
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#distance = 0;
    this.#isGameFailed = false;
    this.#isGameSucess = false;
    this.#numberOfAttemps++;
    this.#bridgeMapMaker.onRetry();
  }
}

module.exports = BridgeGame;
