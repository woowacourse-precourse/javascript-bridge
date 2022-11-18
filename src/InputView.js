const { Console } = require('@woowacourse/mission-utils');
const { GAME } = require('./phrases');
const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

const InputView = {
  readBridgeSize() {
    Console.readLine(GAME.BRIDGE_SIZE, (input) =>
      BridgeMaker.makeBridge(Number(input), BridgeRandomNumberGenerator.generate())
    );
  },

  readMoving() {
    Console.readLine(GAME.MOVING, (input) => {
      game.move(input);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
