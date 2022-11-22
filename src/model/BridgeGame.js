const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");
const { GAME_COMMAND } = require("../utils/Constant");

class BridgeGame {
  #bridge;
  #userMovings;

  constructor(bridgeSize) {
    this.#bridge = BridgeMaker.makeBridge(
      bridgeSize,
      BridgeRandomNumberGenerator.generate
    );
    this.#userMovings = [];
  }

  getBridge() {
    return this.#bridge;
  }

  getUserMovings() {
    return this.#userMovings;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moving, round) {
    this.#userMovings.push(moving);
    if (this.#bridge[round] !== moving) {
      return false;
    }

    return true;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(retryCommand) {
    if (retryCommand === GAME_COMMAND.RESTART) {
      this.#userMovings = [];
      return true;
    }

    return false;
  }
}

module.exports = BridgeGame;
