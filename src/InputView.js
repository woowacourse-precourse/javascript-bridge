const MissionUtils = require('@woowacourse/mission-utils');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { MESSAGES } = require('./Constants');
const OutputView = require('./OutputView');
const Validate = require('./Validate');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(game) {
    MissionUtils.Console.readLine(MESSAGES.INPUT_BRIDGE_LENGTH, (sizeInput) => {
      this.checkBridgeSize(game, sizeInput);
      MissionUtils.Console.print('');
      this.readMoving(game);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(game) {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(game) {},

  checkBridgeSize(game, input) {
    const size = Number(input);

    if (Validate.hasError(Validate.bridgeSize, size)) {
      return this.readBridgeSize(game);
    }
    game.setBridge(
      BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate)
    );
  },
};

module.exports = InputView;
