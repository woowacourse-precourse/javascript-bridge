const { Console } = require("@woowacourse/mission-utils");
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
    Console.readLine("다리의 길이를 입력해주세요.", (bridgeSize) => {
      this.bridge = makeBridge(bridgeSize, generate);
      //만든 값 저장해두기
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D)",
      (maveInput) => {
        //총 다리 길이 중 지금 몇번째 시도인지 확인
        move(maveInput);
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
