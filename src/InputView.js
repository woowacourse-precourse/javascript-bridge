const { Console } = require("@woowacourse/mission-utils");
const { makeBridge } = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const OutPutView = require("./OutputView");
const BridgeGame = require("./BridgeGame");
const bridgeGame = new BridgeGame();

const MESSAGE = {
  start: "다리 건너기 게임을 시작합니다.\n",
  getLength: "다리의 길이를 입력해주세요.\n",
  move: "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  end: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
};

const TYPE = {
  length: "LENGTH",
  move: "MOVE",
  end: "END",
};

const ERROR_MESSAGE = {
  outOfRange: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
  moveCommand: "[ERROR] 이동은 'U' 와 'D'로 가능합니다. ",
  endCommand: "[ERROR] 재시도 는 'R' 종료는 'Q'로 가능합니다. ",
};

const InputView = {
  validate(command, type) {
    switch (type) {
      case "LENGTH":
        if (command >= 3 && command <= 20) {
          return;
        } else {
          throw new Error(ERROR_MESSAGE.outOfRange);
        }
      case "MOVE":
        if (command !== "U" && command !== "D") throw new Error(ERROR_MESSAGE.moveCommand);
        break;
      case "END":
        if (command !== "R" && command !== "Q") throw new Error(ERROR_MESSAGE.endCommand);
        break;
    }
  },

  readBridgeSize() {
    Console.print(MESSAGE.start);
    Console.readLine(MESSAGE.getLength, (number) => {
      this.validate(number, TYPE.length);
      const randomBridge = makeBridge(Number(number), () => generate());
      bridgeGame.makeBridge(randomBridge);
      this.readMoving();
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(MESSAGE.move, (command) => {
      this.validate(command, TYPE.move);
      bridgeGame.move(command);
      OutPutView.printMap(bridgeGame.upperBridge, bridgeGame.lowerBridge);
      bridgeGame.isSuccess ? this.readMoving() : this.readGameCommand();
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(MESSAGE.end, (command) => {
      this.validate(command, TYPE.end);
      switch (command) {
        case "R":
          bridgeGame.retry();
          this.readMoving();
          break;
        case "Q":
          OutPutView.printResult(bridgeGame);
          Console.close();
          break;
      }
    });
  },
};

module.exports = InputView;
