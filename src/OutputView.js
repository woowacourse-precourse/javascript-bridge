const { Console } = require("@woowacourse/mission-utils");
const { GUIDE_MESSAGE, RESULT_MESSAGE } = require("./Constant");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {

  /** 1. 게임시작 안내 문구 출력 */
  printStart() {
    Console.print(GUIDE_MESSAGE.START);
  },

  printRetry() {
    Console.print(GUIDE_MESSAGE.INPUT_TRY);
  },

  /** 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.*/
  printMap(upBridgeReultArr, downBridgeReultArr) {
    Console.print("[ " + upBridgeReultArr.join(" | ") + " ]");
    Console.print("[ " + downBridgeReultArr.join(" | ") + " ]");
  },

  /** 9. 게임 최종결과 출력(게임의 최종 결과를 정해진 형식에 맞춰 출력한다.)*/
  printResult(bridgeResult) {
    Console.print(RESULT_MESSAGE.TITTLE)
    this.printMap(bridgeResult.upBridgeReultArr, bridgeResult.downBridgeReultArr);
    Console.print(RESULT_MESSAGE.IS_SUCCESS + bridgeResult.gameResult);
    Console.print(RESULT_MESSAGE.TRY_COUNT + bridgeResult.tryCount);

    Console.close();
  }
};

module.exports = OutputView;
