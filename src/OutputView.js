/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */

const { Console } = require('@woowacourse/mission-utils');
const Messages = require('./Messages');

const OutputView = {
  up: [],
  down: [],

  startGame() {
    Console.print(Messages.START_GAME);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(oneBridge, upOrDown) {
    const [up, down, upAndDown] = this.makeMap(oneBridge, upOrDown);
    const hasCorrect = Object.values(upAndDown).includes('O');

    Console.print(`[ ${up.join(' | ')} ]`);
    Console.print(`[ ${down.join(' | ')} ]\n`);

    return hasCorrect;
  },

  makeMap(oneBridge, upOrDown) {
    let upAndDown = { U: ' ', D: ' ' };
    if (oneBridge === upOrDown) upAndDown[upOrDown] = 'O';
    else upAndDown[upOrDown] = 'X';

    this.up.push(upAndDown['U']);
    this.down.push(upAndDown['D']);

    return [this.up, this.down, upAndDown];
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(totalCount) {
    Console.print(Messages.END_GAME);
    Console.print(`[ ${this.up.join(' | ')} ]`);
    Console.print(`[ ${this.down.join(' | ')} ]\n`);

    let winOrFail = '성공';
    Console.print(`게임 성공 여부: ${winOrFail}`);
    Console.print(`총 시도한 횟수: ${totalCount}`);
  },
};

module.exports = OutputView;
