const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const bg=new BridgeGame();
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    let bridgeSize;
    Console.readLine('다리의 길이를 입력해주세요.', number => {
      bg.vaildateBridge(number);
      return bridgeSize=number})
    return bridgeSize;
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {

  },
};

module.exports = InputView;
