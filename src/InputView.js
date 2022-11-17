const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const { makeBridge } = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");

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
      mainBridge = makeBridge(bridgeSize, generate); //기준 다리
      const bridgeGame = new BridgeGame(mainBridge);
      InputView.readMoving(mainBridge, bridgeGame); //움직임 입력 받기
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(mainBridge, bridgeGame) {
    Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D)",
      (maveInput) => {
        console.log("mainBridge", mainBridge)
        console.log("bridgeGame", bridgeGame)
        bridgeGame.move(maveInput);
        InputView.readMoving(mainBridge, bridgeGame)
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
      (retryInput) => {
        retry(retryInput);
      }
    );
  },

  startGame() {
    Console.print("다리 건너기 게임을 시작합니다.");
  },
};

module.exports = InputView;
