const { Console } = require("@woowacourse/mission-utils");
const { RESULT, WORD, GAME_CHAR, ENTITY } = require("../Constants/Token");

/**
 * 객체 : 사용자에게 게임 진행 상황과 결과를 출력하는 역할
 * 변경 가능 : 파일경로, 메서드 인자, 메서드 (추가, 변경)
 * 변경 불가 : 메서드 이름
 */

const OutputView = {
  printMessage(message) {
    Console.print(message);
  },

  printMap(currentMap) {
    const { up, down } = currentMap;
    Console.print(
      `${GAME_CHAR.MAP_START} ${up.join(GAME_CHAR.MAP_DIVIDER)} ${
        GAME_CHAR.MAP_END
      }`
    );
    Console.print(
      `${GAME_CHAR.MAP_START} ${down.join(GAME_CHAR.MAP_DIVIDER)} ${
        GAME_CHAR.MAP_END
      }`
    );
  },

  printResult(state) {
    const { trial, isAlive, currentMap } = state;

    Console.print(RESULT.TITLE);
    this.printMap(currentMap);
    Console.print(ENTITY.NEW_LINE);
    Console.print(`${RESULT.TEXT}${isAlive ? WORD.SUCCESS : WORD.FAILURE}`);
    Console.print(`${RESULT.TRIAL}${trial}`);
  },
};

module.exports = OutputView;
