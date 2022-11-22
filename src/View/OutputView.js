const { Console } = require("@woowacourse/mission-utils");
const { PRINT_MESSAGE, BRIDGE_MAP } = require("../Constants");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
 const OutputView = {

  printStart(){
    Console.print(PRINT_MESSAGE.GAME_START);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(userbridgeUp, userbridgeDown){
    Console.print(`[ ${userbridgeUp.join(BRIDGE_MAP.DIVISION)} ]\n`);
    Console.print(`[ ${userbridgeDown.join(BRIDGE_MAP.DIVISION)} ]\n`);

  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(userBridgeUp, userBridgeDown, count){
    Console.print(PRINT_MESSAGE.FINAL_GAME_RESULT);
    this.printMap(userBridgeUp, userBridgeDown);
    Console.print(PRINT_MESSAGE.GAME_RESULT_SUCESS);
    Console.print(PRINT_MESSAGE.GAME_TOTAL_TRY + `${count}`);
    Console.close();
  },

  printFailResult(userBridgeUp, userBridgeDown, count){
    Console.print(PRINT_MESSAGE.FINAL_GAME_RESULT);
    this.printMap(userBridgeUp, userBridgeDown);
    Console.print(PRINT_MESSAGE.GAME_RESULT_FAIL);
    Console.print(PRINT_MESSAGE.GAME_TOTAL_TRY + `${count}`);
    Console.close();
  }
};

module.exports = OutputView;