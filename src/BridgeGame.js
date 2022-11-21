/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor() {
    this.round = 0;
    this.count = 0;
    this.up = [];
    this.down = [];
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    this.round += 1;

    return this.round;
  }

  makeMap(oneBridge, upOrDown) {
    let upAndDown = { U: ' ', D: ' ' };
    if (oneBridge === upOrDown) upAndDown[upOrDown] = 'O';
    else upAndDown[upOrDown] = 'X';

    this.up.push(upAndDown['U']);
    this.down.push(upAndDown['D']);

    return [this.up, this.down, oneBridge === upOrDown];
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.round = 0;
    this.up = [];
    this.down = [];

    return this.round;
  }

  countTry() {
    this.count += 1;

    return this.count;
  }
}

module.exports = BridgeGame;
