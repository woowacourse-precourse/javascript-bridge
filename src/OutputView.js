const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./BridgeConstant');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {

  printStart() {
    Console.print(MESSAGE.START);
  },

  printError(error) {
    Console.print(error);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(moving) {
    const upBridge = moving.upBridge;
    const downBridge = moving.downBridge;

    Console.print(`[ ${upBridge.join(' | ')} ]`);
    Console.print(`[ ${downBridge.join(' | ')} ]`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(gameResult) {
    Console.print(MESSAGE.GAME_RESULT);
    Console.print(`[ ${gameResult.upBridge.join(' | ')} ]`);
    Console.print(`[ ${gameResult.downBridge.join(' | ')} ]`);
    Console.print(`\n게임 성공 여부: ${gameResult.isSuccess ? '성공' : '실패'}`);
    Console.print(`총 시도한 횟수: ${gameResult.count}`);
    Console.close();
  },
};

module.exports = OutputView;
