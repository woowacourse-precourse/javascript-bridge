const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const { makeBridge } = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const { printResult, printMap } = require("./OutputView");
const {
  validateRetryInput,
  validateisRepeat,
  validateInputCatch,
} = require("./Validator");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    let mainBridge = [];
    Console.readLine("다리의 길이를 입력해주세요.", (bridgeSize) => {
      validateInputCatch(bridgeSize) ? InputView.readBridgeSize() : null;
      mainBridge = makeBridge(bridgeSize, generate);
      const bridgeGame = new BridgeGame(mainBridge);
      InputView.readMoving(mainBridge, bridgeGame);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(mainBridge, bridgeGame) {
    Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D)",
      (moveInput) => {
        validateisRepeat(moveInput)
          ? InputView.readMoving(mainBridge, bridgeGame)
          : null;
        InputView.doMove(moveInput, bridgeGame);
        !bridgeGame.hasNext
          ? InputView.readGameCommand(mainBridge, bridgeGame)
          : null;
        InputView.readMoving(mainBridge, bridgeGame);
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(mainBridge, bridgeGame) {
    Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
      (retryInput) => {
        validateRetryInputCatch(retryInput)
          ? InputView.readGameCommand(mainBridge, bridgeGame)
          : null;

        if (retryInput === "R") {
          bridgeGame.init();
          InputView.readMoving(mainBridge, bridgeGame);
          return;
        }
        if (retryInput === "Q") {
          printResult("최종 게임 결과");
          printMap(bridgeGame.userBridge);
          printResult("게임 성공 여부: 실패");
          printResult(`총 시도한 횟수: ${bridgeGame.retrycount - 1}`);
          Console.close();
          return;
        }
      }
    );
  },

  doMove(moveInput, bridgeGame) {
    bridgeGame.move(moveInput);
    printMap(bridgeGame.userBridge);
    printResult(bridgeGame);
  },
};

module.exports = InputView;
