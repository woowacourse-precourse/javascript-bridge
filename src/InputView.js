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
      return bridgeSize = number
    })
    return bridgeSize;
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    let moving;
    Console.readLine('이동할 칸을 선택해주세요..', string => {
      bg.vaildateMoveCommand(string);
      return moving = string
    })
    return moving;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    let command;
    Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)', string => {
      bg.vaildateGameCommand(string);
      if(bg.retry(string)){
        return command = string;
      }
    })
    return command;
  },
};

module.exports = InputView;
