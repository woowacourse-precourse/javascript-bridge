const { close } = require('./utils/MissionUtils');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridgeList;
  #mapList;
  #totalCount;
  #moveCount;

  constructor(progressMoving, progressCommand) {
    this.progressMoving = progressMoving;
    this.progressCommand = progressCommand;

    this.outputView = require('./OutputView');

    this.#bridgeList = [];
    this.#mapList = { up: [], down: [] };

    this.#totalCount = 1;
    this.#moveCount = 0;
  }

  initRetry() {
    this.#moveCount = 0;
    this.#mapList.up = [];
    this.#mapList.down = [];
  }

  progress(input) {
    if (input === 'U' || input === 'D') {
    }
    if (input === 'R' || input === 'Q') {
    }
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {}

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}

  setBridgeList(list) {
    return (this.#bridgeList = list);
  }
}

module.exports = BridgeGame;
