const RandomNumberGenerator = require("../BridgeRandomNumberGenerator");
const BridgeMaker = require("../BridgeMaker");
const { USER_INPUT } = require("../Messages/constants");

class BridgeGame {
  #bridge = [];

  constructor() {
    this.progressIdx = 0;
    this.numberOfCorrect = 0;
    this.isCorrect = false;
    this.gameRunCount = 1;
  }

  start(size) {
    this.#bridge = BridgeMaker.makeBridge(size, RandomNumberGenerator.generate);
  }

  /**
   * @param {string} input
   * @returns {boolean} 입력과 다음 단계의 일치 여부를 체크하여 true/false를 반환한다.
   */
  checkInputCorrect(input) {
    this.isCorrect = false;
    if (this.move(input)) this.progressOneStep();

    this.progressIdx += 1;
    return this.isCorrect;
  }

  progressOneStep() {
    this.numberOfCorrect += 1;
    this.isCorrect = true;
  }

  /**
   * @param {string} input 움직임 입력
   * @returns {boolean} 다리의 다음 단계와 입력이 같으면 true, 서로 다르면 false
   */
  move(input) {
    return (
      (input == USER_INPUT.UP && input == this.#bridge[this.progressIdx]) ||
      (input == USER_INPUT.DOWN && input == this.#bridge[this.progressIdx])
    );
  }

  getIsCorrect() {
    return this.isCorrect;
  }
  getGameRunCount() {
    return this.gameRunCount;
  }

  crossBridgeCompletely() {
    return this.#bridge.length == this.numberOfCorrect;
  }

  setInitializeCondition() {
    this.gameRunCount += 1;
    this.progressIdx = this.numberOfCorrect = 0;
  }

  /**
   * @param {string} input 커맨드 입력
   * @returns {boolean} 재시작 시 true, 종료 시 false
   */
  retry(input) {
    if (input == USER_INPUT.RESTART) {
      this.setInitializeCondition();
      return true;
    }
    if (input == USER_INPUT.QUIT) return false;
  }
}

module.exports = BridgeGame;
