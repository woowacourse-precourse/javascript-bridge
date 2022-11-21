const { ERROR_MESSAGES } = require('./constants/Messages');

const BRIDGE_RANGE = {
  START: 3,
  END: 20,
};

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

  static validateSize(size) {
    if (size.length === 0) {
      throw new Error(ERROR_MESSAGES.BRIDGE_SIZE.EMPTY);
    }
    if (!(size >= BRIDGE_RANGE.START && size <= BRIDGE_RANGE.END)) {
      throw new Error(ERROR_MESSAGES.BRIDGE_SIZE.RANGE);
    }
  }

  static validateBlock(block) {
    if (block.length === 0) {
      throw new Error(ERROR_MESSAGES.BLOCK.EMPTY);
    }
    if (!Object.keys(BridgeGame.BRIDGE_SHAPE).includes(block)) {
      throw new Error(ERROR_MESSAGES.BLOCK.VALUE);
    }
  }

  static validateCommand(command) {
    const commands = ['R', 'Q'];
    if (command.length === 0) {
      throw new Error(ERROR_MESSAGES.COMMAND.EMPTY);
    }
    if (!commands.includes(command)) {
      throw new Error(ERROR_MESSAGES.COMMAND.VALUE);
    }
  }

  setRandomBridge(bridge) {
    this.#randomBridge = bridge;
  }

  setUserBlock(block) {
    this.#userBridge.push(block);
  }

  resetUserBridge() {
    this.#userBridge = [];
  }

  isFail(formattedBridges) {
    return formattedBridges.flat().find((block) => block === 'X');
  }

  isSuccess(formattedBridges) {
    return formattedBridges[0].length === this.#randomBridge.length;
  }

  findBlockIndex(index, block) {
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
      const [randomBlock, correctIndex, incorrectIndex] = this.findBlockIndex(index, block);

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
    this.resetUserBridge();
  }
}

module.exports = BridgeGame;
