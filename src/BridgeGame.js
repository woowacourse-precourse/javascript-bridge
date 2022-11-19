const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #userPos;
  #isPass;
  #userAttempt;
  #isGameOver;
  #bridgeMap;

  constructor() {
    this.#bridge = [];
    this.#isPass = false;
    this.#userPos = 0;
    this.#userAttempt = 1;
    this.#isGameOver = false;
    this.#bridgeMap = {
      U : [],
      D : [],
    }
  }

  getGameOver() {
    return this.#isGameOver;
  }

  getBridgeMap() {
    return this.#bridgeMap;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(userMove) {
    this.checkMove(this.#bridge[this.#userPos], userMove);
    if (!this.#isPass) {
      this.#userPos = 0;
      return;
    }
    this.#userPos++;
    return !!this.#isPass;
  }

  checkMove(bridge, userMove) {
    this.#isPass = bridge === userMove;
    this.setBridgeMap(bridge, userMove);
    if (this.isGameOver()) {
      this.#isGameOver = !!this.#isPass;
    }
  }

  setBridgeMap(bridge, userMove) {
    if (bridge === userMove) {
      this.#bridgeMap[userMove].push(' O ');
      if (userMove === 'U') {
       this.#bridgeMap['D'].push('   ');
       return;
      }
      this.#bridgeMap['U'].push('   ');
      return;
    }
    this.#bridgeMap[userMove].push(' X ');
    this.#bridgeMap[bridge].push('  ');
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#userPos = 0;
    this.#isGameOver = false;
    this.#userAttempt++;
    this.#bridgeMap = {
      U: [],
      D: [],
    }
  }

  init(bridgeSize) {
    this.#bridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
    console.log('set bridge array: ',this.#bridge);
  }

  isGameOver() {
    if (this.#bridge.length === this.#userPos + 1) {
      return true;
    }
  }

  end() {
    if (this.#isPass) {
      return ['성공', this.#userAttempt];
    } else {
      return ['실패', this.#userAttempt];
    }
  }
}

module.exports = BridgeGame;
