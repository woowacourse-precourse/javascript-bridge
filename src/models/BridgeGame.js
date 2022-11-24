const { GAME_MESSAGE, SIGN, MOVE } = require('../utils/constants');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #randomBridge = [];

  #userBridge = [];

  #presentableBridge;

  #isSuccess = GAME_MESSAGE.RESULT_FAIL;

  #round = 1;

  setRandomBridge = (bridge) => {
    this.#randomBridge = bridge;
  };

  setUserBlock = (block) => {
    this.#userBridge.push(block);
  };

  resetUserBridge = () => {
    this.#userBridge = [];
  };

  setPresentableBridge = (presentedBridges) => {
    this.#presentableBridge = presentedBridges;
  };

  toggleResult = () => {
    this.#isSuccess =
      this.#isSuccess === GAME_MESSAGE.RESULT_SUCCESS
        ? GAME_MESSAGE.RESULT_FAIL
        : GAME_MESSAGE.RESULT_SUCCESS;
  };

  setRound = () => {
    this.#round += 1;
  };

  resetRound = () => {
    this.#round = 1;
  };

  test() {
    console.log(this.#isSuccess);
  }

  isGameOver = (formattedBridges) => {
    const isFail = formattedBridges.flat().find((block) => block === SIGN.DEAD);
    const isFinished = formattedBridges[0].length === this.#randomBridge.length;

    this.#isSuccess = isFail
      ? GAME_MESSAGE.RESULT_FAIL
      : GAME_MESSAGE.RESULT_SUCCESS;

    return isFail || isFinished;
  };

  isSuccess = () => {
    if (this.#isSuccess === GAME_MESSAGE.RESULT_SUCCESS) return true;
    return false;
  };

  present = (bridges) => {
    let test = '';
    for (let index = bridges.length - 1; index >= 0; index--) {
      test += '[ ';
      test += bridges[index].join(' | ');
      test += ' ]\n';
    }
    const presentableBridges = test.split('\n').reverse().join('\n');
    return presentableBridges;
  };

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move = () =>
    this.#userBridge.reduce(
      (acc, block, idx) => this.handleBlock(acc, block, idx),
      [[], []]
    );

  handleBlock = (acc, block, idx) => {
    if (this.#userBridge[idx] === MOVE.UP) {
      acc[0].push(this.#randomBridge[idx] === block ? SIGN.ALIVE : SIGN.DEAD);
      acc[1].push(' ');
    } else {
      acc[1].push(this.#randomBridge[idx] === block ? SIGN.ALIVE : SIGN.DEAD);
      acc[0].push(' ');
    }
    return acc;
  };

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.resetUserBridge();
  }

  end() {
    const template = `최종 게임 결과\n${
      this.#presentableBridge
    }\n\n게임 성공 여부: ${this.#isSuccess}\n총 시도한 횟수: ${this.#round}`;
    return template;
  }
}

module.exports = BridgeGame;
