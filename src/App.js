const InputView = require('./UI/InputView')
const OutputView = require('./UI/OutputView')
const { Console } = require('@woowacourse/mission-utils');

class App {
  #generatedBridge;
  #gameStatus;

  play() {
    this.makeBridge();
    this.startGame();
  }

  printBridge() {
    OutputView.printMap(this.#gameStatus);
  }

  // 다리 생성
  makeBridge() {
    this.#generatedBridge = InputView.readBridgeSize();
  }

  // 최초 게임 시작
  startGame() {
    this.#gameStatus = {
      playerLocation: 0,
      bridgeStatus: {
        up: [],
        down: [],
      },
      wrongFlag: false,
      tryCount: 1,
    };
    this.playerMove();
  }

  // 다음 움직임 선택
  playerMove() {
    while (this.#gameStatus.playerLocation !== this.#generatedBridge.length) {
      if (!this.#gameStatus.wrongFlag) {
        InputView.readMoving(this.#generatedBridge, this.#gameStatus);
        this.printBridge();
      }
      if (this.#gameStatus.wrongFlag) {
        this.chooseWrong();
        return;
      }
    }
    this.endGame();
  }

  // 건널 수 없는 곳을 선택한 경우
  chooseWrong() {
    InputView.readGameCommand(this.#gameStatus);
    if (this.#gameStatus.wrongFlag) {
      this.endGame();
    }
    if (!this.#gameStatus.wrongFlag) {
      this.startAgain();
    }
  }

  // 재시도
  startAgain() {
    let getNextCount = this.#gameStatus.tryCount + 1;
    this.#gameStatus = {
      playerLocation: 0,
      bridgeStatus: {
        up: [],
        down: [],
      },
      wrongFlag: false,
      tryCount: getNextCount,
    };
    this.playerMove();
  }

  // 게임 종료 및 결과출력
  endGame() {
    OutputView.printResult(this.#gameStatus);
    Console.close();
  }
}

module.exports = App;
