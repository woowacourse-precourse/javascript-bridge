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
    MissionUtils.Console.print(`${gameRec.bridgeOutput.firstBridge}\n${gameRec.bridgeOutput.secondBridge}`);
    this.decideNextPrompt(gameRec);
  },

  decideNextPrompt(gameRec) {
    const InputView = require("./InputView");
    if (gameRec.correctOrNot === "X") {
      InputView.readGameCommand(gameRec); // 실패 => 게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)
    } else if (gameRec.correctOrNot === "O" && gameRec.bridgeAnswer.length === gameRec.moveNum) {
      OutputView.printResult(gameRec); // 끝까지 성공 => printResult
    } else {
      InputView.readMoving(gameRec); // 아직 진행 중 => readMoving 반복
    }
  },
  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(gameRec) {
    MissionUtils.Console.print(`${MESSAGES.FINAL_RESULT}${gameRec.bridgeOutput.firstBridge}\n${gameRec.bridgeOutput.secondBridge}\n`); // "최종 게임 결과\n"
    if (gameRec.correctOrNot === "O" && gameRec.bridgeAnswer.length === gameRec.moveNum) {
      MissionUtils.Console.print(MESSAGES.SUC_OR_FAIL + MESSAGES.SUCCESS); // 게임 성공 여부: 성공
    } else {
      MissionUtils.Console.print(MESSAGES.SUC_OR_FAIL + MESSAGES.FAIL); // 게임 성공 여부: 실패
    }
    MissionUtils.Console.print(MESSAGES.ATTEMPT_NUM + gameRec.attemptNum); // 총 시도한 횟수: 1
    // MissionUtils.Console.close(); // commented out since watch mode in jest won't quit if this line is included
  },
};

module.exports = OutputView;
