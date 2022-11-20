const { MOVEMENT_KEY, UTILS_URL } = require('../constant/Key');
const { Console } = require(UTILS_URL);
const { PRINT_MESSAGE, BRIDGE_INFO } = require('../constant/Message');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 개임 시작 문구
   */
  printStart() {
    Console.print(PRINT_MESSAGE.STARTGAME);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(moveAbleInfo) {
    [MOVEMENT_KEY.UP, MOVEMENT_KEY.DOUN].forEach((x) =>
      Console.print(BRIDGE_INFO.SHAPE(this.moveMatch(moveAbleInfo, x)))
    );
  },

  moveMatch(arr, keyword) {
    return arr.map(({ move, moveable }) => {
      const moveChar = moveable ? BRIDGE_INFO.IS_MOVEABLE : BRIDGE_INFO.NOT_MOVEABLE;
      return move === keyword ? moveChar : ' ';
    });
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(sucess, tryCount, match) {
    Console.print(PRINT_MESSAGE.TOTALRESULT);
    this.printMap(match);
    Console.print(PRINT_MESSAGE.JUDGESUCESS(sucess));
    Console.print(PRINT_MESSAGE.TOTALTRY(tryCount));
    Console.close();
  },
};

module.exports = OutputView;
