const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor() {
    this.size = 0;
    this.position = 0;
    this.tryCount = 1;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  createUserBridge(size) {
    this.size = size;
    this.bridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
    this.stack = [];
    this.move();
  }

  move() {
    InputView.readMoving({
      func: (Input) => {
        this.stack.push(Input);

        if (Input === "U" || Input === "D") {
          printMap();
          if (!this.bridge[this.position]) this.retry();
          else {
            this.checkMove();
          }
        } else {
          throw new Error("[ERROR] U, D 만 입력 가능 합니다.");
        }
      },
    });
  }

  checkMove() {
    const IS_SUCCESS = this.position === this.size - 1;

    if (IS_SUCCESS) {
      OutputView.printResult({ IS_SUCCESS, that: this });
    } else {
      this.position += 1;
      this.move();
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
}

module.exports = BridgeGame;
