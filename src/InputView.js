const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../constants/game.constants');
const InputValidator = require('../validators/InputValidator');
const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridgeGame) {
    Console.print(GAME_MESSAGE.LENGTH_INPUT);
    Console.readLine('', (length) => {
      try {
        InputValidator.isRightBridgeLength(length);

        const bridge = makeBridge(length, generate);
        bridgeGame.setBridge(bridge);
        bridgeGame.move(bridgeGame)
      } catch (error) {
        Console.print(error.message);
        this.readBridgeSize(bridgeGame);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame, idx = 0) {
    const bridge = bridgeGame.getBridge();

    if (idx !== bridge.length) {
      Console.print(GAME_MESSAGE.UPDOWN_INPUT);
      Console.readLine('', (string) => {
        try {
          InputValidator.isUpDown(string);

        } catch (error) {
          Console.print(error.message);
          this.readMoving(bridgeGame, idx);
        }
      });
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
