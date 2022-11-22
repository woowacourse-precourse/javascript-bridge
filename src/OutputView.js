const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE, GAME_RESOURCE } = require("./constants/Constant");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStart() {
    Console.print(MESSAGE.BRIDGE_GAME_START);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(getMap, bridge) {
    const resultArr = new Array(2);
    resultArr[GAME_RESOURCE.UPSIDE] = "";
    resultArr[GAME_RESOURCE.DOWNSIDE] = "";
    for (let i = 0; i < getMap.length; i++) {
      if (i == 0) {
        resultArr[GAME_RESOURCE.UPSIDE] += GAME_RESOURCE.LEFT_BRACKET;
        resultArr[GAME_RESOURCE.DOWNSIDE] += GAME_RESOURCE.LEFT_BRACKET;
      } else {
        resultArr[GAME_RESOURCE.UPSIDE] += GAME_RESOURCE.VERTICAL;
        resultArr[GAME_RESOURCE.DOWNSIDE] += GAME_RESOURCE.VERTICAL;
      }
      if (getMap[i] === GAME_RESOURCE.UPSIDE) {
        if (getMap[i] !== bridge[i]) {
          resultArr[GAME_RESOURCE.UPSIDE] += GAME_RESOURCE.CANT_GO;
          resultArr[GAME_RESOURCE.DOWNSIDE] += GAME_RESOURCE.BLANK;
        } else {
          resultArr[GAME_RESOURCE.UPSIDE] += GAME_RESOURCE.CAN_GO;
          resultArr[GAME_RESOURCE.DOWNSIDE] += GAME_RESOURCE.BLANK;
        }
      } else if (getMap[i] === GAME_RESOURCE.DOWNSIDE) {
        if (getMap[i] !== bridge[i]) {
          resultArr[GAME_RESOURCE.UPSIDE] += GAME_RESOURCE.BLANK;
          resultArr[GAME_RESOURCE.DOWNSIDE] += GAME_RESOURCE.CANT_GO;
        } else {
          resultArr[GAME_RESOURCE.UPSIDE] += GAME_RESOURCE.BLANK;
          resultArr[GAME_RESOURCE.DOWNSIDE] += GAME_RESOURCE.CAN_GO;
        }
      }
      if (i == getMap.length - 1) {
        resultArr[GAME_RESOURCE.UPSIDE] += GAME_RESOURCE.RIGHT_BRACKET;
        resultArr[GAME_RESOURCE.DOWNSIDE] += GAME_RESOURCE.RIGHT_BRACKET;
      }
    }
    Console.print(resultArr[GAME_RESOURCE.UPSIDE]);
    Console.print(resultArr[GAME_RESOURCE.DOWNSIDE]);
    Console.print("");
    return resultArr;
  },
  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(command, count, result) {
    Console.print(MESSAGE.PRINT_RESULT);
    Console.print(result[GAME_RESOURCE.UPSIDE]);
    Console.print(result[GAME_RESOURCE.DOWNSIDE]);
    Console.print("");
    if (command === 0) {
      Console.print(MESSAGE.PRINT_GAME_RESULT + MESSAGE.FAIL);
      Console.print(MESSAGE.PRINT_TRY_COUNT_MESSAGE + count);
      Console.close();
      return;
    }
    Console.print(MESSAGE.PRINT_GAME_RESULT + MESSAGE.SUCCESS);
    Console.print(MESSAGE.PRINT_TRY_COUNT_MESSAGE + count);
    Console.close();
  },
};

module.exports = OutputView;
