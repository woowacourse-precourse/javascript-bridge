const { Console } = require("@woowacourse/mission-utils");
const { generate } = require('./BridgeRandomNumberGenerator.js');
const { makeBridge } = require('./BridgeMaker.js');

const BridgeGame = require('./BridgeGame.js');

const GET_BRIDGE_SIZE_SENTENCE = '다리의 길이를 입력해주세요.\n';
const GET_MOVIING_INFO_SENTENCE = '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n';

const bridgeGame = new BridgeGame();

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(GET_BRIDGE_SIZE_SENTENCE, (bridgeSize) => {
      bridgeGame.bridge = makeBridge(bridgeSize, generate);

      this.readMoving();
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(GET_MOVIING_INFO_SENTENCE, (movingInfo) => {
      const result = bridgeGame.move(movingInfo);

      if (result) {
        this.readMoving();
      } else {
        this.readGameCommand();
      }
    })
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
