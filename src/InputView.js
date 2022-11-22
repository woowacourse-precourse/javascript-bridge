const { Console } = require('@woowacourse/mission-utils');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const OutputView = require('./OutputView');
const BridgeGame = require('./BridgeGame');

const InputView = {
  bridgeGame: new BridgeGame(),

  readBridgeSize() {
    Console.readLine('다리의 길이를 입력해주세요.\n', (input) => {
      try {
        this.validateBridgeSize(input);
        Console.print('');
        this.readMoving(this.bridgeMaker(input));
      } catch (error) {
        Console.print('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
        this.readBridgeSize();
      }
    });
  },

  validateBridgeSize(bridgeSize) {
    if (!(bridgeSize >= 3 && bridgeSize <= 20))
      throw new Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
  },

  bridgeMaker(bridgeSize) {
    return BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
  },

  readMoving(bridge) {
    Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (input) => {
      try {
        this.validateMoving(input);
        const round = this.bridgeGame.move();
        this.proceedRound(bridge, round, input);
      } catch (error) {
        Console.print('[ERROR] 이동할 칸("U" 또는 "D")을 입력해주세요.');
        this.readMoving(bridge);
      }
    });
  },

  proceedRound(bridge, round, upDown) {
    const [up, down, gameResult] = this.bridgeGame.makeBridge(bridge[round - 1], upDown);
    OutputView.printMap(up, down);
    if (!gameResult) this.readGameCommand(bridge);
    else if (round === bridge.length && gameResult) {
      const totalGame = this.bridgeGame.countGame();
      OutputView.printResult(totalGame, gameResult, [up, down]);
    } else this.readMoving(bridge);
  },

  validateMoving(upDown) {
    if (upDown !== 'U' && upDown !== 'D')
      throw new Error('[ERROR] 이동할 칸("U" 또는 "D")을 입력해주세요.');
  },

  readGameCommand(bridge) {
    Console.readLine(
      '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
      (input) => {
        try {
          this.validateGameCommand(input);
          this.restartGame(bridge, input);
        } catch (error) {
          Console.print('[ERROR] 재시작 또는 종료("R" 또는 "Q")를 입력해주세요.');
          this.readGameCommand(bridge);
        }
      }
    );
  },

  validateGameCommand(endingKey) {
    if (endingKey !== 'R' && endingKey !== 'Q')
      throw new Error('[ERROR] 재시작 또는 종료("R" 또는 "Q")를 입력해주세요.');
  },

  restartGame(bridge, restartGame) {
    const totalGame = this.bridgeGame.countGame();

    if (restartGame === 'R') {
      this.bridgeGame.retry();
      this.readMoving(bridge);
    }
    if (restartGame === 'Q') {
      OutputView.printResult(totalGame, false, this.bridgeGame.getBridge());
    }
  },
};

module.exports = InputView;
