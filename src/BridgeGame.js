const { Console } = require('@woowacourse/mission-utils');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const MESSAGE = require('./utils/constants');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridgeHistory = [];
  #attempts;

  constructor() {
    this.#attempts = 1;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(bridge) {
    Console.readLine(MESSAGE.WHERETOMOVE, (direction) => {
      InputView.readMoving(direction);
      this.#checkMoveCorrectly(direction, bridge);
    });
  }

  #checkMoveCorrectly(direction, bridge) {
    if (bridge[this.#bridgeHistory.length] === direction)
      this.#moveCorretly(direction, bridge);
    else this.#moveIncorrectly(direction, bridge);
  }

  #moveCorretly(direction, bridge) {
    this.#bridgeHistory.push(direction);
    OutputView.printMap(this.#bridgeHistory);
    if (this.#bridgeHistory.length === bridge.length)
      OutputView.printResult('성공', this.#bridgeHistory, this.#attempts);
    else this.move(bridge);
  }

  #moveIncorrectly(direction, bridge) {
    OutputView.printMap(this.#bridgeHistory, direction);
    this.#retry(bridge, direction);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  #retry(bridge, direction) {
    Console.readLine(MESSAGE.REGAME, (re) => {
      InputView.readGameCommand(re);
      if (re === 'R') {
        this.#startRegame(bridge);
      } else {
        this.#endgame(direction);
      }
    });
  }

  #startRegame(bridge) {
    this.#attempts++;
    this.#bridgeHistory = [];
    this.move(bridge);
  }

  #endgame(direction) {
    OutputView.printResult(
      '실패',
      this.#bridgeHistory,
      this.#attempts,
      direction,
    );
  }
}

module.exports = BridgeGame;
