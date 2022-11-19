const { Console } = require('@woowacourse/mission-utils');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap() {},

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},

  printGameStartMsg() {
    Console.print('다리 건너기 게임을 시작합니다.');
  },

  printWrongInputOfBridgeLength() {
    Console.print('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
  },

  printWorngInputOfMoving() {
    Console.print('[ERROR] 다리 이동 입력은 "U"와 "D"만 가능합니다');
  },
};

module.exports = OutputView;
