const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE, GAME_RESOURCE } = require("./constants/Constant");

const OutputView = {
  printStart() {
    Console.print(MESSAGE.BRIDGE_GAME_START);
  },

  printMap(getMap, bridge) {
    const resultArr = new Array(2);
    resultArr[GAME_RESOURCE.UPSIDE] = "";
    resultArr[GAME_RESOURCE.DOWNSIDE] = "";
    for (let i = 0; i < getMap.length; i++) {
      if (i == 0) {
        resultArr[GAME_RESOURCE.UPSIDE] += GAME_RESOURCE.START_BRACKET;
        resultArr[GAME_RESOURCE.DOWNSIDE] += GAME_RESOURCE.START_BRACKET;
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
        resultArr[GAME_RESOURCE.UPSIDE] += GAME_RESOURCE.END_BRACKET;
        resultArr[GAME_RESOURCE.DOWNSIDE] += GAME_RESOURCE.END_BRACKET;
      }
    }
    Console.print(resultArr[GAME_RESOURCE.UPSIDE]);
    Console.print(resultArr[GAME_RESOURCE.DOWNSIDE]);
    Console.print("");
    return resultArr;
  },

  printResult(command, count, result) {
    Console.print(MESSAGE.PRINT_RESULT);
    Console.print(result[GAME_RESOURCE.UPSIDE]);
    Console.print(result[GAME_RESOURCE.DOWNSIDE]);
    Console.print("");
    if (command === 0) this.printFail(count);
    if (command !== 0) this.printSuccess(count);
  },

  printFail(count) {
    Console.print(MESSAGE.PRINT_GAME_RESULT + MESSAGE.FAIL);
    Console.print(MESSAGE.PRINT_TRY_COUNT_MESSAGE + count);
    Console.close();
  },
  printSuccess(count) {
    Console.print(MESSAGE.PRINT_GAME_RESULT + MESSAGE.SUCCESS);
    Console.print(MESSAGE.PRINT_TRY_COUNT_MESSAGE + count);
    Console.close();
  },
};

module.exports = OutputView;
