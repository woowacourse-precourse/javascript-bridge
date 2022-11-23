const { Console } = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { checkBridgeLength, checkUpOrDown, checkRetry } = require("./Exceptions");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    Console.readLine("다리의 길이를 입력해주세요.", (answer) => {
      try {
        checkBridgeLength(Number(answer));
        let bridge = BridgeMaker.makeBridge(Number(answer), BridgeRandomNumberGenerator.generate);
        callback(bridge);
      } catch (e) {
        Console.print(e);
        this.readBridgeSize(callback);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    let move;
    Console.readLine("이동할 칸을 선택해주세요. (위: U, 아래: D)", (answer) => {
      try {
        checkUpOrDown(answer);
        move = answer;
      } catch (e) {
        Console.print(e);
        this.readMoving();
      }
    });
    return move;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    let isRetry;
    Console.readLine("게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)", (answer) => {
      try {
        checkRetry(answer);
        isRetry = answer; 
      } catch (e) {
        Console.print(e);
        this.readGameCommand();
      }
    });
    return isRetry;
  },
};

module.exports = InputView;
