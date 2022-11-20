const GAME = require('./consts/Game');
const EXCEPTION_MESSAGE = require('./consts/Exception');
const Exception = require('./Exception');

class BridgeGame {
  bridge;
  turn;

  constructor(bridge) {
    this.bridge = bridge;
    this.turn = 0;
  }

  move(moving) {
    this.handleMovingException(moving);

    if (this.bridge[turn] === GAME.POSSIBLE[moving]) {
      this.increaseTurn();
      return true;
    }

    return false;
  }

  handleMovingException(moving) {
    switch (false) {
      case moving in [GAME.UP, GAME.DOWN]:
        Exception.throwError(EXCEPTION_MESSAGE.MOVING.CHARACTER);
    }
  }

  increaseTurn() {
    this.turn += 1;
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
