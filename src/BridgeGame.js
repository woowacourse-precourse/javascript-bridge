const { makeBridge } = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { REQUIREMENT } = require('./constant/Constant');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;

  constructor(bridgeLength) {
    this.#bridge = makeBridge(bridgeLength, this.generateRandomNumber);
    console.log(this.#bridge);
  }

  generateRandomNumber() {
    const number = BridgeRandomNumberGenerator.generate();

    if (number === 0) {
      return REQUIREMENT.DOWN;
    } 

    return REQUIREMENT.UP;
  }

  makeBridgeString(userInput) {
    const letter = [REQUIREMENT.UP, REQUIREMENT.DOWN];
    let strArray = [];

    letter.forEach((ele) => {
      strArray.push(`${REQUIREMENT.BRIDGESTART}${this.makeEachMap(this.#bridge, userInput, ele)}${REQUIREMENT.BRIDGEEND}`);
    });

    return strArray;
  }

  makeEachMap(bridge, input, letter) {
    let str = '';
    input.forEach((cur, idx) => {
      str += ` ${this.checkBlock(bridge[idx], cur, letter)} `;
      if (idx !== input.length - 1) {
        str += REQUIREMENT.BRIDGEDELIMETER;
      }
    });

    return str;
  }

  checkBlock(block, cur, letter) {
    if (cur !== letter) {
      return ' ';
    }
    if (block === letter) {
      return REQUIREMENT.CANMOVE;
    }

    return REQUIREMENT.CANNOTMOVE;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(userInput) {
    const idx = userInput.length - 1;
    if (userInput[idx] === this.#bridge[idx]) {
      return true;
    }

    return false;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
