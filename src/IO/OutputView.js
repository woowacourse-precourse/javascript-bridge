const MissionUtils = require('@woowacourse/mission-utils');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {

  upperBridge: '',

  lowerBridge: '',

  movingLog: [],

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridge, bridgeMoveCount, input) {
    this.makeBridgeMovingLog(bridge, bridgeMoveCount, input);
    this.movingLog.push(input);
    MissionUtils.Console.print(this.upperBridge);
    MissionUtils.Console.print(this.lowerBridge);
  },

  makeBridgeMovingLog(bridge, bridgeMoveCount, input) {
    this.upperBridge = '[';
    this.lowerBridge = '[';
    this.previousMovingLog();
    this.currentMovingLog(bridge, bridgeMoveCount, input);
    this.upperBridge += ']';
    this.lowerBridge += ']';
  },

  previousMovingLog() {
    this.movingLog.forEach((log) => {
      this.upperBridge += log === 'U' ? ' O |' : '   |';
      this.lowerBridge += log === 'U' ? '   |' : ' O |';
    });
  },

  currentMovingLog(bridge, bridgeMoveCount, input) {
    if (bridge[bridgeMoveCount] === 'U') {
      this.upperBridge += input === 'U' ? ' O ' : '   ';
      this.lowerBridge += input === 'U' ? '   ' : ' X ';
      return;
    }
    this.upperBridge += input === 'U' ? ' X ' : '   ';
    this.lowerBridge += input === 'U' ? '   ' : ' O ';
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(result, tryCount) {
    MissionUtils.Console.print('\n최종 게임 결과');
    MissionUtils.Console.print(this.upperBridge);
    MissionUtils.Console.print(this.lowerBridge);
    const IS_SUCCESSFUL = `\n게임 성공 여부: ${result}`;
    MissionUtils.Console.print(IS_SUCCESSFUL);
    MissionUtils.Console.print(`총 시도한 횟수: ${tryCount}`);
    MissionUtils.Console.close();
  },
};

module.exports = OutputView;
