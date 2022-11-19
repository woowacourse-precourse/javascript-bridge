const { Console } = require('@woowacourse/mission-utils');

const COMMAND = require('./Constants/contant');
const { INPUT_MESSAGE } = require('./Constants/message');
const { initBridge, canNotMove, canMoveNext } = require('./GameController');
const { printResult } = require('./OutputView');
const Validator = require('./Validator');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(INPUT_MESSAGE.bridge_length, (bridgeLength) => {
      try {
        const game = initBridge(bridgeLength);
        this.readMoving(game);
      } catch (err) {
        Console.print(err);
        this.readBridgeSize();
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(game) {
    // 이동할 칸 선택
    Console.readLine(INPUT_MESSAGE.move, (direction) => {
      try {
        if (canNotMove(game, direction)) {
          this.readGameCommand(game);
        } else if (canMoveNext(game)) {
          this.readMoving(game);
        }
      } catch (err) {
        Console.print(err);
        this.readMoving(game);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(game) {
    Console.readLine(INPUT_MESSAGE.retry, (command) => {
      Validator.checkCorrectCommand(command);
      if (command === COMMAND.retry) {
        game.retry();
        this.readMoving(game);
      } else {
        printResult(game);
      }
    });
  },
};

module.exports = InputView;
