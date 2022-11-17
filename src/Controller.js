const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const Validator = require('./Validator');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class Controller {
  handleGameStart() {
    OutputView.printStart();
    this.count = 1;
    this.handleMakeBridge();
  }

  handleMakeBridge() {
    InputView.readBridgeSize((input) => {
      this.bridgeGame = new BridgeGame(input);
      Console.print('');
      this.handleMove();
    });
  }

  handleMove() {
    Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (input) => {
      try {
        Validator.validateIncludes(['U', 'D'], input);
        const { resultToString, gameStatus } = this.bridgeGame.move(input);
        OutputView.printMap(resultToString);
        Console.print('');
        if (gameStatus === 2) this.handleGameEnd();
        if (gameStatus === 1) this.handleGameOver();
        if (gameStatus === 0) this.handleMove();
      } catch (err) {
        Console.print(`\n${err.message}`);
        this.handleMove();
      }
    });
  }

  handleGameOver() {
    Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n', (input) => {
      try {
        Validator.validateIncludes(['R', 'Q'], input);
        if (input === 'R') this.handleGameRetry();
        if (input === 'Q') this.handleGameEnd();
      } catch (err) {
        Console.print(`\n${err.message}`);
        this.handleGameOver();
      }
    });
  }

  handleGameRetry() {
    this.bridgeGame.retry();
    this.count += 1;
    this.handleMove();
  }

  handleGameEnd() {
    const { resultToString } = this.bridgeGame.getResultMap();
    const gameStatus = this.bridgeGame.getGameStatus();
    OutputView.printResult(resultToString, gameStatus, this.count);
  }
}

module.exports = Controller;
