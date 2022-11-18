const MissionUtils = require("@woowacourse/mission-utils");

const ValidCheck = require("./ValidCheck");
/*
  * 사용자로부터 입력을 받는 역할을 한다.
    제공된 InputView 객체를 활용해 구현해야 한다.
    InputView의 파일 경로는 변경할 수 있다.
    InputView의 메서드의 인자는 변경할 수 있다.
    사용자 값 입력을 위해 필요한 메서드를 추가할 수 있다.
 */
const InputView = {
  VALID_CHECK_ERROR: -1,
  VALID_CHECK_DO: 0,
  VALID_CHECK_PASS: 1,
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    let bridgeSize = undefined;
    let flagValid = InputView.VALID_CHECK_DO;

    while (flagValid === InputView.VALID_CHECK_DO) {
      bridgeSize = InputView.receiveSize();
      flagValid = ValidCheck.validBridgeSize(bridgeSize);
      ValidCheck.raiseError(flagValid);
    }

    return bridgeSize;
  },

  receiveSize() {
    let bridgeSize = undefined;

    MissionUtils.Console.readLine("다리의 길이를 입력해주세요. \n >",
      (answer) => {
        bridgeSize = answer;
        console.log(`answer: ${answer}`);
      }
    );

    return bridgeSize;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    let moving = undefined;
    let flagValid = InputView.VALID_CHECK_DO;

    while (flagValid === InputView.VALID_CHECK_DO) {
      moving = InputView.receiveMoving();
      flagValid = ValidCheck.validMoving(moving);
      ValidCheck.raiseError(flagValid);
    }

    return moving;
  },

  receiveMoving() {
    let moving = undefined;

    MissionUtils.Console.readLine(
      "이동할 칸을 선택해주세요 (위: U, 아래: D)\n >",
      answer => moving = answer
    )

    return moving;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    let readGameCommand = undefined;
    let flagValid = InputView.VALID_CHECK_DO;

    while (flagValid === InputView.VALID_CHECK_DO) {
      readGameCommand = InputView.receiveReadGameCommand();
      flagValid = ValidCheck.validReadGameCommand(readGameCommand);
      ValidCheck.raiseError(flagValid);
    }

    return moving;
  },

  receiveReadGameCommand() {
    let readGameCommand = undefined;
    
    MissionUtils.Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n >",
      answer => readGameCommand = answer
    );

    return readGameCommand;
  }
};

module.exports = InputView;
