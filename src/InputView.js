const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const { isRetry } = require('./BridgeGameReferee');
const { makeBridge } = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const { printResult, printMap, printResultFalse } = require("./OutputView");
const {
  validateRetryInputCatch,
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
        if (validateisRepeat(moveInput)) {
          return  InputView.readMoving(mainBridge, bridgeGame)
        }
        InputView.doMove(moveInput, bridgeGame);
        !bridgeGame.hasNext && !bridgeGame.finish? InputView.readGameCommand(mainBridge, bridgeGame): null;
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
        validateRetryInputCatch(retryInput)? InputView.readGameCommand(mainBridge, bridgeGame) : null;
        if (isRetry(retryInput)) {
          bridgeGame.init();
          InputView.readMoving(mainBridge, bridgeGame);
        } 
        if (!isRetry(retryInput)) printResultFalse(bridgeGame)
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
