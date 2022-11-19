const MissionUtils = require('@woowacourse/mission-utils');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * @param {boolean[]} selections 여태까지의 움직임 점보를 받는다.
   * @param {boolean[]} movePossible 각각의 움직임이 가능한지 받는다.
   * @return {string} 출력
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  makeOneLinefBridgeView(selections, movesPossible) {
    const chars = [];
    for (let i = 0; i < selections.length; i += 1) {
      if (!selections[i]) chars.push(' ');
      if (selections[i] && movesPossible[i]) chars.push('O');
      if (selections[i] && !movesPossible[i]) chars.push('X');
    }
    return `[ ${chars.join(' | ')} ]`;
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * @param {('U' | 'D')[]} moveStatus 여태까지의 움직임 점보를 받는다.
   * @param {boolean[]} movesPossible 각각의 움직임이 가능한지 받는다.
   * @return {string} 출력
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  makeBridgeView(moveStatus, movesPossible) {
    return `${this.makeOneLinefBridgeView(
      moveStatus.map((elem) => elem === 'U'),
      movesPossible
    )}\n${this.makeOneLinefBridgeView(
      moveStatus.map((elem) => elem === 'D'),
      movesPossible
    )}`;
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * @param {('U' | 'D')[]} moveStatus 여태까지의 움직임 점보를 받는다.
   * @param {boolean[]} movesPossible 각각의 움직임이 가능한지 받는다.
   * @return {void} 출력
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(moveStatus, movesPossible) {
    const bridgeView = this.makeBridgeView(moveStatus, movesPossible);
    MissionUtils.Console.print(bridgeView);
  },

  RESULT_VIEW: (gameResult, tryCount) =>
    `게임 성공 여부: ${
      gameResult ? '성공' : '실패'
    }\n총 시도한 횟수: ${tryCount}`,

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * @param {boolean} gameResult 여태까지의 움직임 점보를 받는다.
   * @param {number} tryCount
   * @return {void} 출력
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(gameResult, tryCount) {
    MissionUtils.Console.print(this.RESULT_VIEW(gameResult, tryCount));
  },
};

module.exports = OutputView;
