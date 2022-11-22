/**
 * 다리 건너기 게임을 관리하는 클래스
 */
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

class BridgeGame {
  #bridge;
  #userState;
  #countTry;
  #condition;

  constructor(size) {
    this.validateSizeRange(size);
    this.#bridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
    this.#userState = [];
    this.#countTry = 0;
  }

  validateSizeRange(size) {
    if (!(size >= 3 && size <= 20)) {
      throw Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
    }
  }

  validateUnd(und) {
    console.log(und);
    if (!(und === 'D' || und === 'U')) {
      throw Error('[ERROR] 대문자 U , D 둘 중 하나만 입력해주세요.');
    }
  }
}

module.exports = BridgeGame;
