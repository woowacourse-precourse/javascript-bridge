/*
제공된 OutputView 객체를 활용해 구현해야 한다.
OutputView의 `파일 경로`는 변경할 수 있다. 🙆‍♂️
OutputView의 `메서드의 이름`은 변경할 수 없다. 🙅‍♀️
`인자`는 필요에 따라 추가하거나 변경할 수 있다. 🙆‍♂️
값 출력을 위해 필요한 `메서드`를 추가할 수 있다. 🙆‍♂️
 */

const { Console } = require('@woowacourse/mission-utils');

const { MESSAGE } = require('./utils/constants');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStart() {
    Console.print(MESSAGE.GAME_START);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(gameMap) {
    Console.print(`[ ${this.getUpperMap(gameMap).join(' | ')} ]`);
    Console.print(`[ ${this.getLowerMap(gameMap).join(' | ')} ]`);
  },

  //FIXME 11줄
  getUpperMap(gameMap) {
    return gameMap.map(({ moving, canMove }) => {
      if (moving !== 'U') {
        return ' ';
      }

      if (canMove) {
        return 'O';
      } else {
        return 'X';
      }
    });
  },

  //FIXME 11줄
  getLowerMap(gameMap) {
    return gameMap.map(({ moving, canMove }) => {
      if (moving !== 'D') {
        return ' ';
      }

      if (canMove) {
        return 'O';
      } else {
        return 'X';
      }
    });
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(gameMap, { tryCount, gameResult }) {
    Console.print(MESSAGE.INFO);
    this.printMap(gameMap);

    if (gameResult) {
      Console.print('\n' + MESSAGE.WIN_GAME);
    } else {
      Console.print('\n' + MESSAGE.LOSE_GAME);
    }

    Console.print(MESSAGE.TRY(tryCount));
  },

  printError(errorMessage) {
    Console.print(errorMessage);
  },
};

module.exports = OutputView;
