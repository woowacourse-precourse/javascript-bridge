const { Console } = require("@woowacourse/mission-utils");
const { makeBridge } = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");
const bridgeGame = new BridgeGame();

const MESSAGE = {
  start: "다리 건너기 게임을 시작합니다.\n",
  getLength: "다리의 길이를 입력해주세요.\n",
  move: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  end: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
};

const TYPE = {
  length: "LENGTH",
  move: "MOVE",
  END: "END",
};

const ERROR_MESSAGE = {
  outOfRange: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
};

const InputView = {
  validate(number, type) {
    switch (type) {
      case "LENGTH":
        if (number >= 3 && number <= 20) {
          return;
        } else {
          throw new Error(ERROR_MESSAGE.outOfRange);
        }
      case "MOVE":
        break;
      case "END":
        break;
    }
  },

  readBridgeSize() {
    Console.print(MESSAGE.start);
    Console.readLine(MESSAGE.getLength, (number) => {
      this.validate(number, TYPE.length);
      const randomBridge = makeBridge(Number(number), () => generate());
      bridgeGame.makeBridge(randomBridge);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
