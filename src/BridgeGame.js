const BridgeSizeValidation = require('./validation/BridgeSizeValidation');
const MoveCommandValidation = require('./validation/MoveCommandValidation');
const GameCommandValidation = require('./validation/GameCommandValidation');
const BridgeMaker = require('./lib/BridgeMaker');
const BridgeRandomNumberGenerator = require('./lib/BridgeRandomNumberGenerator');

class BridgeGame {
  #size;
  #bridge;
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(command, round) {
    MoveCommandValidation(command);
    return this.#isMovable(command, round);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(reply) {
    GameCommandValidation(reply);
    return reply === 'R' ? true : false;
  }

  setSize(input) {
    BridgeSizeValidation(input);
    this.#size = input;
  }

  makeBridge() {
    this.#bridge = BridgeMaker.makeBridge(this.#size, BridgeRandomNumberGenerator.generate);
    console.log(this.#bridge);
  }

  #isMovable(command, round) {
    return command === this.#bridge[round];
  }
}

module.exports = BridgeGame;
