const inputView = require('./InputView');
const { BRIDGE } = require('../constants/game.constants');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #tryCount;
  #inputUpDown;
  #upList;
  #downList;

  constructor () {
    this.#tryCount = 1;
    this.#upList = [];
    this.#downList = [];
  }

  setBridge (bridge) {
    this.#bridge = bridge;
  }

  getBridge () {
    return this.#bridge;
  }

  static maker (bridgeGame) {
    inputView.readBridgeSize(bridgeGame);
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(bridgeGame) {
    inputView.readMoving(bridgeGame);
  }

  incrementTryCount () {
    this.#tryCount += 1;
  }

  setInputUpDown (inputUpDown) {
    this.#inputUpDown = inputUpDown;
  }

  getTryCount () {
    return this.#tryCount;
  }

  getInputUpDown () {
    return this.#inputUpDown;
  }

  sameBridge (idx) {
    return this.getBridge()[idx] === this.getInputUpDown()
      ? BRIDGE.ABLE
      : BRIDGE.UNABLE;
  }

  setMapArray (sameResult, string) {
    if (string === BRIDGE.UP && sameResult === BRIDGE.ABLE) {
      this.#upList.push(sameResult);
      this.#downList.push(' ');
    }
    if (string === BRIDGE.UP && sameResult === BRIDGE.UNABLE) {
      this.#upList.push(sameResult);
      this.#downList.push(' ');
    }
    if (string === BRIDGE.DOWN && sameResult === BRIDGE.ABLE) {
      this.#upList.push(' ');
      this.#downList.push(sameResult);
    }
    if (string === BRIDGE.DOWN && sameResult === BRIDGE.UNABLE) {
      this.#upList.push(' ');
      this.#downList.push(sameResult);
    }
  }

  getUpList () {
    return this.#upList;
  }

  getDownList () {
    return this.#downList;
  }

  getPrintList (list) {
    return `${BRIDGE.START} ${list.join(BRIDGE.DIVISION)} ${BRIDGE.END}`;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(bridgeGame) {
    inputView.readGameCommand(bridgeGame);
  }
}

module.exports = BridgeGame;
