const validator = require('./utils/validator');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  static BRIDGE_SHAPE = {
    D: 0,
    U: 1,
  };

  #randomBridge = [];

  #userBridge = [];

  setRandomBridge(bridge) {
    this.#randomBridge = bridge;
  }

  setUserBlock(block) {
    validator.validateBlock(block);
    this.#userBridge.push(block);
  }

  getGameResult(formattedBridges) {
    const isFail = formattedBridges.flat().find((block) => block === 'X');
    const isSuccess = formattedBridges[0].length === this.#randomBridge.length;

    return [isFail, isSuccess];
  }

  #findBlockIndex(index, block) {
    const randomBlock = this.#randomBridge[index];
    const correctIndex = BridgeGame.BRIDGE_SHAPE[block];
    const incorrectIndex = correctIndex === 1 ? 0 : 1;

    return [randomBlock, correctIndex, incorrectIndex];
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    const formatBridge = [[], []];
    this.#userBridge.forEach((block, index) => {
      const [randomBlock, correctIndex, incorrectIndex] = this.#findBlockIndex(index, block);

      formatBridge[correctIndex].push(randomBlock === block ? 'O' : 'X');
      formatBridge[incorrectIndex].push(' ');
    });
    return formatBridge;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#userBridge = [];
  }
}

module.exports = BridgeGame;
