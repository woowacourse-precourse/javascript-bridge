const { Console } = require("@woowacourse/mission-utils");
const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    let bridge;
    Console.readLine("다리의 길이를 입력해주세요.",(bridgeSize) => {
      bridge = makeBridge(Number(bridgeSize), generate);
    })
    return bridge;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    let move;
    Console.readLine("이동할 칸을 선택해주세요. (위: U, 아래: D)",(moveState) => {
      move = moveState;
    })
    return move;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    let gameOption;
    Console.readLine("게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",(option) => {
      gameOption = option;
    })
    return gameOption;
  },
};

module.exports = InputView;
