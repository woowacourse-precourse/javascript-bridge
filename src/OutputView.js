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
  // todo : 중간에 틀리면 o | o | x 로 출력되어야하는데
  //                 -> x | x | x 로 바뀜(중간에 맞춘 값들도 )
  // 값을 하나씩 비교해야되나 ? ?
  printMap(keepGaming, getMap) {
    const resultArr = new Array(2);
    resultArr[GAME_RESOURCE.UPSIDE] = "";
    resultArr[GAME_RESOURCE.DOWNSIDE] = "";

    for (let i = 0; i < getMap.length; i++) {
      if (i == 0) {
        resultArr[GAME_RESOURCE.UPSIDE] += "[ ";
        resultArr[GAME_RESOURCE.DOWNSIDE] += "[ ";
      } else {
        resultArr[GAME_RESOURCE.UPSIDE] += " | ";
        resultArr[GAME_RESOURCE.DOWNSIDE] += " | ";
      }
      if (getMap[i] === GAME_RESOURCE.UPSIDE) {
        if (keepGaming === "right" || keepGaming === "allRight") {
          resultArr[GAME_RESOURCE.UPSIDE] += "O";
          resultArr[GAME_RESOURCE.DOWNSIDE] += " ";
        } else {
          resultArr[GAME_RESOURCE.UPSIDE] += "X";
          resultArr[GAME_RESOURCE.DOWNSIDE] += " ";
        }
      } else if (getMap[i] === GAME_RESOURCE.DOWNSIDE) {
        if (keepGaming === "right" || keepGaming === "allRight") {
          resultArr[GAME_RESOURCE.UPSIDE] += " ";
          resultArr[GAME_RESOURCE.DOWNSIDE] += "O";
        } else {
          resultArr[GAME_RESOURCE.UPSIDE] += " ";
          resultArr[GAME_RESOURCE.DOWNSIDE] += "X";
        }
      }
      if (i == getMap.length - 1) {
        resultArr[GAME_RESOURCE.UPSIDE] += " ] ";
        resultArr[GAME_RESOURCE.DOWNSIDE] += " ] ";
      }
    }
    Console.print(resultArr[GAME_RESOURCE.UPSIDE]);
    Console.print(resultArr[GAME_RESOURCE.DOWNSIDE]);

    return resultArr;
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(command, count, result) {
    // 투두 : 칸 추가 하기

    if (command === 0) {
      Console.print(MESSAGE.PRINT_RESULT);
      Console.print(result[GAME_RESOURCE.UPSIDE]);
      Console.print(result[GAME_RESOURCE.DOWNSIDE]);
      Console.print(MESSAGE.PRINT_GAME_RESULT + " " + MESSAGE.FAIL);
      Console.print(MESSAGE.PRINT_TRY_COUNT_MESSAGE + " " + count);
      Console.close();
      return;
    }
    Console.print(MESSAGE.PRINT_RESULT);
    Console.print(result[GAME_RESOURCE.UPSIDE]);
    Console.print(result[GAME_RESOURCE.DOWNSIDE]);
    Console.print(MESSAGE.PRINT_GAME_RESULT + " " + MESSAGE.SUCCESS);
    Console.print(MESSAGE.PRINT_TRY_COUNT_MESSAGE + " " + count);
    Console.close();
  },
};

module.exports = OutputView;
