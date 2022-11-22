const MissionUtils = require("@woowacourse/mission-utils");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  startMessage() {
    MissionUtils.Console.print(`다리 건너기 게임을 시작합니다.`);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridge, currentStatus) {
    let upBridge = '[ ';
    let downBridge = '[ ';

    for (let i=0; i<currentStatus.length; i++) {
      if (bridge[i] === 'U') {
        upBridge += 'O | ';
        downBridge += '  | ';
      }
      else if (bridge[i] === 'D') {
        upBridge += '  | ';
        downBridge += 'O | ';
      }
    }
    upBridge = upBridge.slice(0, upBridge.length-3);
    downBridge = downBridge.slice(0, downBridge.length-3);
    upBridge += ' ]';
    downBridge += ' ]';
    MissionUtils.Console.print(`${upBridge}\n${downBridge}`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridgeGame, resultStatus) {
    MissionUtils.Console.print(`최종 게임 결과`);
    this.printMap(bridgeGame.bridge, bridgeGame.currentStatus)
    MissionUtils.Console.print(`게임 성공 여부: ${resultStatus ? '성공' : '실패'}`);
    MissionUtils.Console.print(`총 시도한 횟수: ${bridgeGame.retryCount}`)
  },

  errorMessage() {
    MissionUtils.Console.print(`[ERROR] 유효하지 않은 입력값입니다.`);
  },
};

module.exports = OutputView;