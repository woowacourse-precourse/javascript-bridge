const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const { INPUT_MESSAGE } = require('./constant/message');
const { printResult, printMap, printStt } = require('./OutputView');
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
        Validator.chekcBridgeSizeValue(bridgeLength);
        const bridge = BridgeMaker.makeBridge(bridgeLength, generate);
        console.log(bridge);
        const game = new BridgeGame(bridge);

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
        Validator.checkCorrectDirection(direction);
        game.move(direction); // records에 넣음 (Move)
        printMap(game); // printMap
        if (BridgeGame.canMoveNext(direction, game.getNextDirection())) {
          // canMoveNext (마지막에 넣은거로 비교해보기)
          if (game.isEndOfBridge()) {
            printMap(game);
            printResult(game);
            printMap(game);
            printStt(game);
          } else this.readMoving(game);
        } else this.readGameCommand(game);
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
    console.log('readGamecommand');
    Console.readLine(INPUT_MESSAGE.retry, (command) => {
      Validator.validateRetry(command);
      if (command === 'R') {
        game.retry();
        this.readMoving(game);
      } else {
        printResult();
        printMap(game);
        printStt(game);
      }
    });
  },
};

module.exports = InputView;
