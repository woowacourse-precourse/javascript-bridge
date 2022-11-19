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
      return this.progressMove(input);
    }
    if (input === 'R' || input === 'Q') {
    }
  }

  progressMove(input) {
    const moveCount = this.#moveCount;
    this.increamentMoveCount();
    this.compareMoveInput(input, moveCount);
    this.compareMove(input, moveCount, this.#mapList);
  }

  compareMoveInput(input, index) {
    if (this.#bridgeList[index] === input) {
      return this.setMapList(input, 'O');
    }

    return this.setMapList(input, 'X');
  }

  compareMove(input, index, mapList) {
    if (this.#bridgeList[index] === input) {
      return this.move(mapList);
    }

    return this.retry(input, mapList);
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(mapList) {}

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(input, mapList) {}

  checkSuccessGame() {
    if (this.#bridgeList.length !== this.#moveCount) {
      return false;
    }

    return true;
  }

  setMapList(input, stingOX) {
    if (input === 'U') {
      return this.addMapList(stingOX, ' ');
    }
    if (input === 'D') {
      return this.addMapList(' ', stingOX);
    }
  }

  addMapList(up, down) {
    this.#mapList.up.push(up);
    this.#mapList.down.push(down);
  }

  increamentMoveCount() {
    return (this.#moveCount += 1);
  }

  increamentTotalCount() {
    return (this.#totalCount += 1);
  }

  setBridgeList(list) {
    return (this.#bridgeList = list);
  }
}

module.exports = BridgeGame;
