const { Console } = require("@woowacourse/mission-utils");
const gameOutputMessage = require("../constants/gameOutputMessage");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  topBridge: [],
  bottomBridge: [],
  gameResult: '',

  printStart() {
    Console.print(gameOutputMessage.START_GAME);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(topMark, bottomMark) {
    this.topBridge.push(topMark);
    this.bottomBridge.push(bottomMark);
    Console.print(`[ ${this.topBridge.join(' | ')} ]`);
    Console.print(`[ ${this.bottomBridge.join(' | ')} ]`);
  },

  retryMap() {
    this.topBridge.pop();
    this.bottomBridge.pop();
    Console.print(`[ ${this.topBridge.join(' | ')} ]`);
    Console.print(`[ ${this.bottomBridge.join(' | ')} ]`);
  },

  sucessOrFailed(result) {
    if (result === true) this.gameResult = '성공';
    if (result === false) this.gameResult = '실패';
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(gameTrial) {
    Console.print('최종 게임 결과');
    Console.print(`[ ${this.topBridge.join(' | ')} ]`);
    Console.print(`[ ${this.bottomBridge.join(' | ')} ]`);
    Console.print(`게임 성공 여부: ${this.gameResult}`);
    Console.print(`총 시도한 횟수: ${gameTrial}`);
  },
};

module.exports = OutputView;
