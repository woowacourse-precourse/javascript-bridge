const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../constants/game.constants');
const InputValidator = require('../validators/InputValidator');
const { printMap, printResult } = require('./OutputView');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(handleBridgeLength) {
    Console.print(GAME_MESSAGE.LENGTH_INPUT);
    Console.readLine('', handleBridgeLength);
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

          bridgeGame.setInputUpDown(string);
          bridgeGame.setMapArray(bridgeGame.sameBridge(idx), string);
          printMap(bridgeGame);
          if (bridge[idx] === string) {
            return this.readMoving(bridgeGame, idx + 1);
          }
          bridgeGame.retry(bridgeGame);
        } catch (error) {
          Console.print(error.message);
          this.readMoving(bridgeGame, idx);
        }
      });
    } else {
      printResult(true, bridgeGame);
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame) {
    Console.print(GAME_MESSAGE.RETRY_INPUT);
    Console.readLine('', (string) => {
      try {
        InputValidator.isRestartQuit(string);
        if (string === 'R') {
          bridgeGame.setList();
          bridgeGame.move(bridgeGame);
          bridgeGame.incrementTryCount();
        }
        if (string === 'Q') printResult(false, bridgeGame);
      } catch (error) {
        Console.print(error.message);
        this.readGameCommand(bridgeGame);
      }
    });
  },
};

module.exports = InputView;
