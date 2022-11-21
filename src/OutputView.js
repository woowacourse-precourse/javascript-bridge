const MissonUtils = require('@woowacourse/mission-utils');

/**
 * 제약사항
 * 1. 제공된 OutputView 객체를 활용해 구현해야 한다.
 * 2. OutputView의 파일 경로는 변경할 수 있다.
 * 3. OutputView의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
 * 4. 값 출력을 위해 필요한 메서드를 추가할 수 있다.
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
};

module.exports = OutputView;
