const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');

const MESSAGE = Object.freeze({
  INPUT_BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  INPUT_MOVING: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
});

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(MESSAGE.INPUT_BRIDGE_SIZE, (input) => {
      this.bridge = makeBridge(input, generate);
      this.bridgeGame = new BridgeGame(this.bridge);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    const { bridgeGame } = this;

    Console.readLine(MESSAGE.INPUT_MOVING, (input) => {
      bridgeGame.move(input);
    })
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
