/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  outputGameStart() {
    Console.print('다리 건너기 게임을 시작합니다.\n');
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridge, userState) {
    for (let i = 0; i < 2; i++) {
      let string = '[';
      for (let j = 0; j < userState.length; j++) {
        if (
          (i == 0 && userState[j] === 'U') ||
          (i == 1 && userState[j] === 'D')
        ) {
          if (bridge[j] === userState[j]) {
            string += ' O ';
          } else {
            string += ' X ';
          }
        } else {
          string += '   ';
        }
        if (j != userState.length - 1) {
          string += '|';
        }
      }
      string += ']';
      Console.print(string);
    }
    Console.print('');
  },
};

module.exports = OutputView;
