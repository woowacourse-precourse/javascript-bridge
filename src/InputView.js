const { Console } = require('@woowacourse/mission-utils');
const { GAME } = require('./phrases');
const Validation = require('./Validation');

const InputView = {
  readBridgeSize(process) {
    Console.readLine(GAME.BRIDGE_SIZE, (input) => {
      Validation.bridgeSize(input);
      process.makeBridge(input);
    });
  },

  readMoving(process) {
    Console.readLine(GAME.MOVING, (input) => {
      Validation.moving(input);
      process.move(input);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
