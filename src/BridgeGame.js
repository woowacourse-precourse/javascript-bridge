const OutputView = require('./OutputView');
const InputView = require('./InputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeNumber = require('./BridgeRandomNumberGenerator');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #turn;
  #try = 0;
  #bridge;
  #upperBridge;
  #lowerBridge;

  init() {
    this.#turn = 0;
    this.#upperBridge = [];
    this.#lowerBridge = [];
  }

  enterBridgeLength() {
    const bridgeLength = (input) => {
      this.#bridge = BridgeMaker.makeBridge(input, BridgeNumber);
      this.enterMoving();
    };

    InputView.readBridgeSize('다리의 길이를 입력해주세요.\n', bridgeLength);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(input) {
    const GO = 'O';
    const STOP = 'X';
    const crossable = this.#bridge[this.#turn];
    this.#turn += 1;
    if (input === crossable) {
      this.isFirst(GO, input);
    }
    if (input !== crossable) {
      this.isFirst(STOP, input);
      this.retry();
    }
  }

  isFirst(state, input) {
    if (this.#turn === 1) this.firstBlock(state, input);
    if (this.#turn !== 1) this.afterFirstBlock(state, input);
  }

  firstBlock(state, input) {
    if (input === 'U') {
      this.#upperBridge.push(` ${state} `);
      this.#lowerBridge.push('   ');
    }
    if (input === 'D') {
      this.#upperBridge.push('   ');
      this.#lowerBridge.push(` ${state} `);
    }
  }

  afterFirstBlock(state, input) {
    if (input === 'U') {
      this.#upperBridge.push(`| ${state} `);
      this.#lowerBridge.push('|   ');
    }
    if (input === 'D') {
      this.#upperBridge.push('|   ');
      this.#lowerBridge.push(`| ${state} `);
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.init();
    this.#try += 1;
  }
}

module.exports = BridgeGame;
