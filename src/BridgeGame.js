const { close } = require('./utils/MissionUtils');
const { USER_TEXT, GAME_TEXT, NUMBER, BOOLEAN } = require('./constant/contant');

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

    this.#totalCount = NUMBER.ONE;
    this.#moveCount = NUMBER.ZERO;
  }

  initRetry() {
    this.#moveCount = NUMBER.ZERO;
    this.#mapList.up = [];
    this.#mapList.down = [];
  }

  progress(input) {
    if (input === USER_TEXT.UP || input === USER_TEXT.DOWN) {
      return this.progressMove(input);
    }
    if (input === USER_TEXT.RESTART || input === USER_TEXT.QUIT) {
      return this.progressRetryOrQuit(input);
    }
  }

  progressMove(input) {
    const moveCount = this.#moveCount;
    this.increamentMoveCount();
    this.compareMoveInput(input, moveCount);
    this.compareMove(input, moveCount, this.#mapList);
  }

  progressRetryOrQuit(input) {
    if (input === USER_TEXT.QUIT) {
      return this.finish(this.#mapList, GAME_TEXT.FAIL, this.#totalCount);
    }

    this.retry(input, this.#mapList);
    this.increamentTotalCount();
  }

  compareMoveInput(input, index) {
    if (this.#bridgeList[index] === input) {
      return this.setMapList(input, GAME_TEXT.O);
    }

    return this.setMapList(input, GAME_TEXT.X);
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
  move(mapList) {
    this.outputView.printMap(mapList);
    if (this.checkSuccessGame()) {
      return this.finish(this.#mapList, GAME_TEXT.SUCCESS, this.#totalCount);
    }
    this.progressMoving();
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(input, mapList) {
    if (input === USER_TEXT.RESTART) {
      this.initRetry();
      return this.progressMoving();
    }

    this.outputView.printMap(mapList);
    this.progressCommand();
  }

  finish(mapList, successOrNot, totalResult) {
    this.outputView.printResult(mapList, successOrNot, totalResult);
    close();
  }

  checkSuccessGame() {
    if (this.#bridgeList.length !== this.#moveCount) {
      return BOOLEAN.FALSE;
    }

    return BOOLEAN.TRUE;
  }

  setMapList(input, stingOX) {
    if (input === USER_TEXT.UP) {
      return this.addMapList(stingOX, GAME_TEXT.SPACE);
    }
    if (input === USER_TEXT.DOWN) {
      return this.addMapList(GAME_TEXT.SPACE, stingOX);
    }
  }

  addMapList(up, down) {
    this.#mapList.up.push(up);
    this.#mapList.down.push(down);
  }

  increamentMoveCount() {
    return (this.#moveCount += NUMBER.ONE);
  }

  increamentTotalCount() {
    return (this.#totalCount += NUMBER.ONE);
  }

  setBridgeList(list) {
    return (this.#bridgeList = list);
  }
}

module.exports = BridgeGame;
