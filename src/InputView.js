const { Console } = require("@woowacourse/mission-utils");
const ENTER_BRIDGELENGTH = "다리의 길이를 입력해주세요.";
const ENTER_MOVING = "이동할 칸을 선택해주세요. (위: U, 아래: D)";
const ENTER_PROCEED =
  "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)";

const InputView = {
  readBridgeSize(callback) {
    Console.readLine(ENTER_BRIDGELENGTH, callback);
  },

  readMoving() {
    let moving;

    Console.readLine(ENTER_MOVING, (answer) => {
      moving = answer;
    });

    return moving;
  },

  readGameCommand() {
    let proceed;

    Console.readLine(ENTER_PROCEED, (answer) => {
      proceed = answer;
    });

    return proceed;
  },
};

module.exports = InputView;
