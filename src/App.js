const { Console } = require('@woowacourse/mission-utils');
const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const { DIRECTION, MESSAGE, ANSWER } = require('./constant');
const GameController = require('./controllers/GameController');
const InputView = require('./views/InputView');
const { readBridgeSize, gameCtrl } = require('./views/InputView');

class App {
  #size;
  #bridge;
  #curPlace;
  #numberOfAttempts;
  #bridgeMap;
  #success;
  #gameCtrl;

  constructor() {
    this.init();
    this.#numberOfAttempts = 1;
    this.#success = false;
    this.#gameCtrl = new GameController();
  }

  init() {
    this.#bridgeMap = { U: [], D: [] };
    this.#curPlace = 0;
  }

  play() {
    // this.gameStart();
    this.#gameCtrl.gameStart();
    this.process();
  }

  process() {
    const sizeCallback = (size) => {
      this.#gameCtrl.makeBridge(size);
      this.#gameCtrl.nextStep();
    };

    InputView.readBridgeSize(sizeCallback);
  }

  // gameStart() {
  //   Console.print('다시 건너기 게임을 시작합니다.\n');
  //   this.askBridgeSize();
  // }

  // askBridgeSize() {
  //   Console.readLine('다리의 길이를 입력해주세요.\n', (size) => {
  //     this.#size = Number(size);
  //     this.makeBridge();
  //   });
  // }

  // makeBridge() {
  //   this.#bridge = BridgeMaker.makeBridge(this.#size, generate);
  //   this.askMoveDirection();
  // }

  // askMoveDirection() {
  //   console.log(this.#bridge);
  //   Console.readLine(
  //     '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  //     (answer) => {
  //       this.movePlayer(Number(DIRECTION[answer]));
  //     }
  //   );
  // }

  // movePlayer(direction) {
  //   const canCross = direction === Number(this.#bridge[this.#curPlace++]);
  //   if (canCross) {
  //     this.#bridgeMap[DIRECTION[direction]].push('O');
  //   } else {
  //     this.#bridgeMap[DIRECTION[direction]].push('X');
  //   }
  //   this.#bridgeMap[DIRECTION[(direction + 1) % 2]].push(' ');
  //   this.judge(canCross);
  // }

  // judge(canCross) {
  //   this.printBridgeMap();
  //   canCross ? this.isDone() : this.askRetry();
  // }

  // printBridgeMap() {
  //   const bridgeMap = Object.values(this.#bridgeMap);
  //   bridgeMap.forEach((map, idx) =>
  //     Console.print(`[ ${map.join(' | ')} ]${idx ? '\n' : ''}`)
  //   );
  // }

  // isDone() {
  //   if (this.#size === this.#curPlace) {
  //     this.#success = true;
  //     this.printResult();
  //   } else {
  //     this.askMoveDirection();
  //   }
  // }

  // askRetry() {
  //   this.#numberOfAttempts += 1;
  //   Console.readLine(MESSAGE.ASK_RETRY, (answer) => {
  //     answer === ANSWER.RETRY ? this.retry() : this.printResult();
  //   });
  // }

  // retry() {
  //   this.init();
  //   this.askMoveDirection();
  // }

  // printResult() {
  //   Console.print(`최종 게임 결과`);
  //   this.printBridgeMap();
  //   Console.print(`게임 성공 여부: ${this.#success ? '성공' : '실패'}`);
  //   Console.print(`총 시도한 횟수: ${this.#numberOfAttempts}`);
  //   this.exit();
  // }

  // exit() {
  //   Console.close();
  // }
}

const app = new App();
app.play();

module.exports = App;
