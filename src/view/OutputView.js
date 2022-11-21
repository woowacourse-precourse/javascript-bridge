const { Console } = require("@woowacourse/mission-utils");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  START: "다리 건너기 게임을 시작합니다.\n",
  RESULT: "최종 게임 결과\n",
  END_MSG: "게임 성공 여부: ",
  SUCCESS: "성공\n",
  FAIL: "실패\n",
  TRY_MSG: "총 시도한 횟수: ",
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(result) {
    Console.print(result);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(result, isSuccess, tryNum) {
    const newLine = isSuccess ? "\n" : "";
    const resultMsg = newLine + this.RESULT + result + "\n\n";
    const successMsg = this.END_MSG + (isSuccess ? "성공\n" : "실패\n");
    const tryMsg = this.TRY_MSG + tryNum;
    const msg = resultMsg + successMsg + tryMsg;
    Console.print(msg);
  },

  printStart() {
    Console.print(this.START);
  },

  printError(error) {
    Console.print(error);
  },
};

module.exports = OutputView;
