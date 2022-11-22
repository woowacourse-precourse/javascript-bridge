/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const { Console } = require("@woowacourse/mission-utils");
const ValidateInput = require("./ValidateInput");
const { printError } = require("./OutputView");

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   * @param {Object} bridgeGame 게임 실행 시 생성되는 BridgeGame 클래스
   */
  readBridgeSize: (bridgeGame) => {
    Console.readLine(`\n다리 길이를 입력해주세요.\n`, (input) => {
      try {
        ValidateInput.bridgeSize(input);
        bridgeGame.make(input);
        InputView.readMoving(bridgeGame);
      } catch (e) {
        printError(e);
        InputView.readBridgeSize(bridgeGame);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   * @param {Object} bridgeGame 게임 실행 시 생성되는 BridgeGame 클래스
   */
  readMoving: (bridgeGame) => {
    Console.readLine(
      `\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n`,
      (input) => {
        try {
          ValidateInput.moving(input);
          bridgeGame.move(input);
        } catch (e) {
          printError(e);
          InputView.readMoving();
        }
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   * @param {Object} bridgeGame 게임 실행 시 생성되는 BridgeGame 클래스
   */
  readGameCommand(bridgeGame) {
    Console.readLine(
      `\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n`,
      (input) => {
        try {
          ValidateInput.gameCommand(input);
          bridgeGame.retry(input);
        } catch (e) {
          printError(e);
          InputView.readGameCommand(bridgeGame);
        }
      }
    );
  },
};

module.exports = InputView;
