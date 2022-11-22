/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const { Console } = require("@woowacourse/mission-utils");
const ValidateInput = require("./ValidateInput");
const { makeBridge } = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const { printError } = require("./OutputView");
const BridgeGame = require("./BridgeGame");
const InputView = {
  bridge: null,
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize: () => {
    Console.readLine(`\n다리 길이를 입력해주세요.\n`, (input) => {
      try {
        ValidateInput.bridgeSize(input);
        this.bridge = makeBridge(input, generate);
        InputView.readMoving();
      } catch (e) {
        printError(e);
        InputView.readBridgeSize();
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving: () => {
    const bridgeGame = new BridgeGame(this.bridge);
    Console.readLine(
      `\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n`,
      (input) => {
        try {
          ValidateInput.moving(input);
          bridgeGame.move(this.bridge, input);
        } catch (e) {
          printError(e);
          InputView.readMoving();
        }
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
