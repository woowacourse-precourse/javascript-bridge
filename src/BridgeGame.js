const BridgeMaker = require('./BridgeMaker');
const BridgeRanDomNumber = require('./BridgeRandomNumberGenerator');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridgeSize;
  #bridge;
  #copyBridge;
  #moveState = [[], []];
  #retryCount = 1;
  #isSuccess = '';
  
  constructor(bridgeSize) {
    this.#bridgeSize = bridgeSize;
    this.#bridge = this.generateBridge();
    this.#copyBridge = this.#bridge.slice();
  }
  
  generateBridge() {
    return BridgeMaker.makeBridge(this.#bridgeSize, BridgeRanDomNumber.generate);
  }
  
  match(moveAnswer) {
    if (this.#copyBridge[0] === moveAnswer) {
      this.#copyBridge.shift();
      this.#isSuccess = '성공';
      return [moveAnswer, true];
    } else {
      this.#copyBridge.shift();
      this.#isSuccess = '실패';
      return [moveAnswer, false];
    }
  }
  
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moveAnswer) {
    const matchResult = this.match(moveAnswer);
    this.parseResult(matchResult);
    return this.#moveState;
  }

  parseResult(matchResult) {
    const [upOrDown, matchBoolean] = matchResult;
    if (matchBoolean) {
      if (upOrDown === 'U') {
        this.#moveState[0].push(' O ');
        this.#moveState[1].push('   ');
      } else {
        this.#moveState[0].push('   ');
        this.#moveState[1].push(' O ');
      }
    } else {
      if (upOrDown === 'U') {
        this.#moveState[0].push(' X ');
        this.#moveState[1].push('   ');
      } else {
        this.#moveState[0].push('   ');
        this.#moveState[1].push(' X ');
      }
    }
  }

  checkRemainBridge() {
    if (this.#copyBridge.length !== 0) {
      return true;
    }
    return false;
  }

  checkMoveSuccess() {
    if (
      this.#moveState[0].includes(' X ') || 
      this.#moveState[1].includes(' X ')
    ) {
      return false;
    }
    return true;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#retryCount += 1;
    this.#copyBridge = this.#bridge.slice();
    this.#moveState = [[], []];
  }

  getFinalResult() {
    return [this.#moveState, this.#isSuccess, this.#retryCount];
  }
}

module.exports = BridgeGame;
