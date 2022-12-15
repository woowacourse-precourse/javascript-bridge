const BridgeMaker = require("../BridgeMaker");
const { generate } = require("../utils/BridgeRandomNumberGenerator");
const { MAGIC_NUMBER } = require("../utils/Constant");
const Convertor = require("../utils/Convertor");
const Judge = require("../utils/Judge");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #moves = [];
  #trialTime = MAGIC_NUMBER.startCount;

  setBridge(number) {
    this.#bridge = BridgeMaker.makeBridge(number, generate);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(letter) {
    this.#moves.push(letter);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry = () => {
    this.#moves = [];
    this.#trialTime += MAGIC_NUMBER.retryCount;
  };

  getResult() {
    const resultArray = Convertor.convertToResultArray(
      this.#bridge,
      this.#moves
    );
    const map = Convertor.convertArrayToMap(resultArray);
    const isCorrect = Judge.isCorrect(this.#bridge, this.#moves);
    const isGameOver = Judge.isGameOver(this.#bridge, this.#moves);

    return { map, isCorrect, isGameOver, trialTime: this.#trialTime };
  }
}

module.exports = BridgeGame;
