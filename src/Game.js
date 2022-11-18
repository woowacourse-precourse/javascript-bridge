const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { GAME_MESSAGE } = require('./constants/constants');
const makePrintBridge = require('./utils/makePrintBridge');
const { printResult, printMap } = require('./UI/OutputView');
const {
  readBridgeSize,
  readMoving,
  readGameCommand,
} = require('./UI/InputView');

function check(input) {
  return input;
}

class Game {
  #myBridge;
  #myBridgeLength;

  constructor() {}

  start() {
    Console.print(GAME_MESSAGE.GAME_START);

    this.#myBridgeLength = readBridgeSize(check);
    Console.print(this.#myBridgeLength);
    // 다리 객체 생성! -> 다리만드는함수, 랜덤숫자넣어주는함수, 다리 길이 넣어주기
    //   this.#myBridge = new BridgeGame(
    //     BridgeRandomNumberGenerator.generate,
    //     BridgeMaker.makeBridge,
    //     this.#myBridgeLength
    //   );

    //   while (true) {
    //     const move = await this.#myBridge.move(readMoving); // 움직인 곳이 정답이면

    //     // 정답이 아닐 경우
    //     if (!move) {
    //       this.#myBridge.gameStateChangeFailure();
    //       const resultBridge = this.#myBridge.printMyBridge(makePrintBridge);
    //       printMap(resultBridge);

    //       const retry = await this.#myBridge.retry(readGameCommand);
    //       if (retry) {
    //         this.#myBridge.gameStateChangeSuccess();
    //         continue;
    //       }

    //       Console.print(GAME_MESSAGE.GAME_RESULT);
    //       printMap(resultBridge);
    //       this.#myBridge.printResultGame(printResult);
    //       break;
    //     }

    //     // 정답일경우
    //     const resultBridge = this.#myBridge.printMyBridge(makePrintBridge);
    //     printMap(resultBridge);

    //     if (this.#myBridge.isFinishedGame()) {
    //       Console.print(GAME_MESSAGE.GAME_RESULT);
    //       printMap(resultBridge);
    //       this.#myBridge.printResultGame(printResult);
    //       break;
    //     }
    //   }

    //   Console.close();
  }
}

module.exports = Game;
