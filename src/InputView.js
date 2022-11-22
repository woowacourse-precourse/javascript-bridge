const { Console } = require('@woowacourse/mission-utils');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine("다리의 길이를 입력해주세요", (bridgesize) => {
      this.checkBridgeSize(bridgesize);
    });
  },

  checkBridgeSize(bridgesize){
    if(isNaN(bridgesize)) throw new Error('[ERROR] 다리 길이는 숫자여야 합니다.');
    if(bridgesize<3 || bridgesize>20) throw new Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
  },

  makeBridge(bridgeSize) {
    return BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
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
