const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeMaker = require('./BridgeMaker');
const User = require('./User');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge = [];
  #status = '';
  #footprint = {
    upside: [],
    downside: [],
  };
  MAKE_MOVE_MAP = {
    U: (result) => {
      this.#footprint.upside.push(result);
      this.#footprint.downside.push(' ');
    },
    D: (result) => {
      this.#footprint.upside.push(' ');
      this.#footprint.downside.push(result);
    },
  };

  constructor(size) {
    this.user = new User();
    this.#bridge = BridgeMaker.makeBridge(
      Number(size),
      BridgeRandomNumberGenerator.generate,
    );
  }

  getStatus() {
    return this.#status;
  }

  setStaus() {
    const index = this.user.getIndex();
    const isCorrect = this.#bridge[index] === this.user.getRoute()[index];
    const isEnd = index + 1 === this.#bridge.length;
    if (isEnd && isCorrect) {
      this.#status = 'END';
    } else if (!isEnd && isCorrect) {
      this.#status = 'NEXT';
    } else if (!isCorrect) {
      this.#status = 'FAIL';
    }
    return this;
  }

  getFootprint() {
    return this.#footprint;
  }

  setFootprint() {
    const index = this.user.getIndex();
    const result =
      this.user.getRoute()[index] === this.#bridge[index] ? 'O' : 'X';
    this.MAKE_MOVE_MAP[this.user.getRoute()[index]](result);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(command) {
    this.user.setRoute(command);

    return this;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.user.count();
    this.user.clear();
    this.#footprint.upside = [];
    this.#footprint.downside = [];
  }

  getResult() {
    return {
      footprint: this.#footprint,
      endStatus: this.#status === 'END' ? '성공' : '실패',
      tryCount: this.user.getTryCount(),
    };
  }
}

module.exports = BridgeGame;
