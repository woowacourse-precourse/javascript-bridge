/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGES } = require("./Constants/Constants");

const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(gameRec) {
    MissionUtils.Console.print(
      `${gameRec.bridgeOutput.firstBridge}\n${gameRec.bridgeOutput.secondBridge}`,
    );
    const InputView = require("./InputView");
    if (gameRec.correctOrNot === "X") { // 실패 => 게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)
      InputView.readGameCommand(gameRec);
    } else if (gameRec.correctOrNot === "O" && gameRec.bridgeAnswer.length === gameRec.moveNum) {
      gameRec.success = true;
      OutputView.printResult(gameRec); // 끝까지 성공
    } else { // readMoving 반복
      InputView.readMoving(gameRec); // 여기: gameRec에 들어가는 변수 확인하고 딸려 들어갈 때 뭐 체크해야 하는지 확인!
    }
  },
  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
};

module.exports = OutputView;
