const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
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
  move() {
    InputView.readMoving({
      func: type => {
        const IS_UP = type === 'U';
        const IS_DOWN = type === 'D';
        const IS_CORRECT =
            (IS_UP && this.bridge[0][this.position] === 'O') ||
            (IS_DOWN && this.bridge[1][this.position] === 'O');

        this.trace[this.position] = type;
        if (IS_UP || IS_DOWN) {
          OutputView.printMap({ bridge: this.bridge, trace: this.trace, positon: this.position });
          if (!IS_CORRECT) this.retry();
          else {
            const IS_SUCCESS = this.position === this.size - 1;

            if (IS_SUCCESS) {
              OutputView.printResult({ IS_SUCCESS, that: this });
            } else {
              this.position += 1;
              this.move();
            }
          }
        } else {
          throw new Error('U, D 만 입력 가능 합니다.');
        }
      },
    });
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    InputView.readGameCommand({
      func: () => {
        this.position = 0;
        this.tryCount += 1;
        this.trace = new Array(this.size).fill(' ');
        this.move();
      },
      that: this,
    });
  }

  setBridge(size) {
    this.size = size;
    this.bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    this.trace = new Array(size).fill(' ');
    this.move();
  }
}

module.exports = BridgeGame;
