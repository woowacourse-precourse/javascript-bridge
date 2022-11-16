const { Console } = require("@woowacourse/mission-utils");
const { makeBridge } = require("./BridgeMaker");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(){
    Console.readline("다리의 길이를 입력해주세요" , (num) => {
      this.bridgeException(num);
      const bridgeRandomNum = BridgeRandomNumberGenerator.generate();
      const createBridge = makeBridge(num, bridgeRandomNum);
      this.readMoving(createBridge);
    })
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},

  bridgeException(num){
    if(num < 3 || num > 20){
      throw new Error("[ERROR] 다리의 길이는 3 이상 20 이하여야 합니다.");
    }
  }
};

module.exports = InputView;
