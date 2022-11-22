const { Console, Random } = require("@woowacourse/mission-utils");
const { GUIDE_MESSAGE, ERROR_MESSAGE, RESULT_MESSAGE } = require("./Constant");
const app = require("./App");

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


  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap() {
    let upBridgeReultArr = []; // o,x,공백으로 들어와야함
    let downBridgeReultArr = [];
    if(upBridgeReultArr > 1) {
      return upBridgeReultArr.join(" | ")
    }

    Console.print("[ " + upBridgeReultArr + " ]")
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {
    Console.print(RESULT_MESSAGE.TITTLE)

    this.printMap();

    Console.print(RESULT_MESSAGE.IS_SUCCESS,)//성공여부
    Console.print(RESULT_MESSAGE.TRY_COUNT,)//성공 횟수

    Console.close();
  }
};

module.exports = OutputView;