const { makeBridge } = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { REQUIREMENT, MOVERESULT } = require('./constant/Constant');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #userInput = [];

  constructor(bridgeLength) {
    this.#bridge = makeBridge(bridgeLength, BridgeRandomNumberGenerator.generate);
  }

  makeBridgeString(bridge = this.#bridge, userInput = this.#userInput) {
    const letter = [REQUIREMENT.UP, REQUIREMENT.DOWN];
    const strArray = [];

    letter.forEach((ele) => {
      strArray.push(`${REQUIREMENT.BRIDGESTART}${this.makeEachMap(bridge, userInput, ele)}${REQUIREMENT.BRIDGEEND}`);
    });

    return strArray;
  }

  makeEachMap(bridge, input, letter) {
    let str = '';
    
    input.forEach((cur, idx) => {
      str += ` ${this.checkBlock(bridge[idx], cur, letter)} ${REQUIREMENT.BRIDGEDELIMETER}`;
    });
    str = str.slice(0, -1);

    return str;
  }

  checkBlock(block, cur, letter) {
    if (cur !== letter) return ' ';

    if (block === letter) return REQUIREMENT.CANMOVE;

    return REQUIREMENT.CANNOTMOVE;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(userInput = this.#userInput, bridge = this.#bridge) {
    const idx = userInput.length - 1;
    const moveResult = this.getMoveResult(userInput, bridge, idx);

    return moveResult;
  }

  getMoveResult(userInput, bridge, idx) {
    if (userInput[idx] !== bridge[idx]) return MOVERESULT.WRONGBLOCK;
    
    if (userInput.length !== bridge.length) return MOVERESULT.RIGHTBLOCK; 
    
    return MOVERESULT.GAMECLEAR;
  }

  updateUserInput(input) {
    this.#userInput.push(input);
  }
  
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(input) {
    if (input === REQUIREMENT.RETRY) {
      this.#userInput = [];
      return true;
    }

    return false;
  }
}

module.exports = BridgeGame;
