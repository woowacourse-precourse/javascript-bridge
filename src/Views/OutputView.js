const MissionUtils = require('@woowacourse/mission-utils');
const InterfaceView = require('./InterFaceView');

const { Console } = MissionUtils;
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = class extends InterfaceView {
  print(message) {
    Console.print(message);
  }
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  printMap(message) {
    throw new Error('메서드 구현 요망');
  }

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(message) {
    throw new Error('메서드 구현 요망');
  }
};

module.exports = OutputView;
