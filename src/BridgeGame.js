const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor(bridge) {
    this.bridge = bridge;
    this.totalPlay = 1;
    this.index = 0;
    this.map = [[], []];
    this.isEnd = false;
    this.isSuccess = false;
  }

  init() {
    this.index = 0;
    this.map = [[], []];
    this.isFail = false;
  }

  compare(answer) {
    if (answer === 'U' && this.bridge[this.index] === 'U') {
      return ['O', ' ', true];
    }

    if (answer === 'U' && this.bridge[this.index] === 'D') {
      return ['X', ' ', false];
    }

    if (answer === 'D' && this.bridge[this.index] === 'U') {
      return [' ', 'X', false];
    }

    if (answer === 'D' && this.bridge[this.index] === 'D') {
      return [' ', 'O', true];
    }
  }

  move(answer) {
    const [upCheck, downCheck, compare] = this.compare(answer);
    const [up, down] = this.map;

    up.push(upCheck);
    down.push(downCheck);
    OutputView.printMap([up, down]);

    this.index += 1;
    this.isEnd = this.index === this.bridge.length;
    this.isSuccess = this.isEnd && compare;

    return compare;
  }

  retry() {
    this.totalPlay += 1;
    this.init();
  }

  end(game) {
    OutputView.printResult(game);
    Console.close();
  }
}

module.exports = BridgeGame;
