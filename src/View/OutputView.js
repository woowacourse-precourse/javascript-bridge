// OutputView의 파일 경로는 변경할 수 있다.
// OutputView의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
// 값 출력을 위해 필요한 메서드를 추가할 수 있다.

const { Console } = require('@woowacourse/mission-utils');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  game: null,
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printStart() {
    Console.print('다리 건너기 게임을 시작합니다.');
  },

  printMap() {
    let upside = [];
    let downside = [];
    this.game.bridge.forEach((direction, i) => {
      if (i === this.game.bridge.length - 1 && !this.game.isSuccess) {
        upside = [...upside, direction === 'U' ? 'X' : ' '];
        downside = [...downside, direction === 'D' ? 'X' : ' '];
      } else {
        upside = [...upside, direction === 'U' ? 'O' : ' '];
        downside = [...downside, direction === 'D' ? 'O' : ' '];
      }
    });
    Console.print(`[ ${upside.join(' | ')} ]`);
    Console.print(`[ ${downside.join(' | ')} ]`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {
    Console.print('\n최종 게임 결과');
  },
};

module.exports = OutputView;
