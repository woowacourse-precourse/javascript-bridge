/* eslint-disable operator-linebreak */
const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const { SHORT_CUT, GAME_STRING, NUMBER } = require('./constants');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;

  #steps = NUMBER.zero;

  #numberAttempts = NUMBER.one;

  #answer;

  #isAnswer;

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(answer) {
    this.#answer = answer;
    this.#isAnswer = this.#bridge[this.#steps] === answer;
    if (this.#bridge[this.#steps] === answer) {
      this.#steps += NUMBER.one;
    }
  }

  setAttempts() {
    this.#numberAttempts += NUMBER.one;
  }

  setBridge(size) {
    this.#bridge = makeBridge(size, generate);
  }

  getBridge() {
    return this.#bridge;
  }

  getSteps() {
    return this.#steps;
  }

  getAttempts() {
    return this.#numberAttempts;
  }

  isFinish() {
    const isDone = this.#steps === this.#bridge.length;
    return isDone;
  }

  isAnswer() {
    return this.#isAnswer;
  }

  static getBridgeString(bridge) {
    return `[ ${bridge.join(' | ')} ]`;
  }

  getMoveResult() {
    const { upBridge, downBridge } = this.createBridgeStringArray();
    const upBridgeResult = BridgeGame.getBridgeString(upBridge);
    const downBridgeResult = BridgeGame.getBridgeString(downBridge);
    return { upBridgeResult, downBridgeResult };
  }

  getMap() {
    const { upBridgeResult, downBridgeResult } = this.getMoveResult();
    const result = `${upBridgeResult}\n${downBridgeResult}`;
    return result;
  }

  createBridgeStringArray() {
    const upBridge = this.createSucceseArray(SHORT_CUT.up);
    const downBridge = this.createSucceseArray(SHORT_CUT.down);
    if (!this.#isAnswer) {
      const fail = this.createFailArray(upBridge, downBridge);
      return { upBridge: fail.upBridge, downBridge: fail.downBridge };
    }
    return { upBridge, downBridge };
  }

  createSucceseArray(kind) {
    const curBridge = this.#bridge.slice(0, this.#steps);
    const bridgeString = curBridge.map((item) => {
      if (item === kind) return GAME_STRING.success;
      return GAME_STRING.normal;
    });
    return bridgeString;
  }

  createFailArray(upBridge, downBridge) {
    if (this.#answer === SHORT_CUT.up) {
      const { upBridge: failUpBridge, downBridge: failDownBridge } =
        BridgeGame.createUpBridgeFailArray(upBridge, downBridge);
      return { upBridge: failUpBridge, downBridge: failDownBridge };
    }
    const { upBridge: failUpBridge, downBridge: failDownBridge } =
      BridgeGame.createDownBridgeFailArray(upBridge, downBridge);
    return { upBridge: failUpBridge, downBridge: failDownBridge };
  }

  static createUpBridgeFailArray(upBridge, downBridge) {
    return {
      upBridge: [...upBridge, GAME_STRING.fail],
      downBridge: [...downBridge, GAME_STRING.normal],
    };
  }

  static createDownBridgeFailArray(upBridge, downBridge) {
    return {
      upBridge: [...upBridge, GAME_STRING.normal],
      downBridge: [...downBridge, GAME_STRING.fail],
    };
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
