const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constants/Constant");
const BridgeGame = require("./BridgeGame");

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
  printMap(keepGaming, getMap) {
    let upSide = "";
    let downSide = "";
    for (let i = 0; i < getMap.length; i++) {
      if (i == 0) {
        upSide += "[ ";
        downSide += "[ ";
      } else {
        upSide += " | ";
        downSide += " | ";
      }
      if (getMap[i] === 1) {
        if (keepGaming === "right" || keepGaming === "allRight") {
          upSide += "O";
          downSide += " ";
        } else {
          upSide += "X";
          downSide += " ";
        }
      } else if (getMap[i] === 0) {
        if (keepGaming === "right" || keepGaming === "allRight") {
          upSide += " ";
          downSide += "O";
        } else {
          upSide += " ";
          downSide += "X";
        }
      }
      if (i == getMap.length - 1) {
        upSide += " ] ";
        downSide += " ] ";
      }
    }
    Console.print(upSide);
    Console.print(downSide);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(command, count) {
    // 투두 : 칸 추가 하기

    if (command === 0) {
      Console.print(MESSAGE.PRINT_GAME_RESULT + " " + MESSAGE.FAIL);
      Console.print(MESSAGE.PRINT_TRY_COUNT_MESSAGE + " " + count);
      return;
    }
    Console.print(MESSAGE.PRINT_RESULT);
    Console.print(MESSAGE.PRINT_GAME_RESULT + " " + MESSAGE.SUCCESS);
    Console.print(MESSAGE.PRINT_TRY_COUNT_MESSAGE + " " + count);
    Console.close();
  },
};

module.exports = OutputView;
