const { Console } = require('@woowacourse/mission-utils');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const OutputView = require('./OutputView');
const BridgeGame = require('./BridgeGame');

const InputView = {
  bridgeGame: new BridgeGame(),

  readBridgeSize() {
    Console.readLine('다리의 길이를 입력해주세요.\n', (input) => {
      this.validateBridgeSize(input);
      input = Number(input);

      this.readMoving(this.bridgeMaker(input));
    });
  },

  bridgeMaker(bridgeSize) {
    return BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
  },

  validateBridgeSize(bridgeSize) {
    if (!(bridgeSize >= 3 && bridgeSize <= 20))
      throw new Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
  },

  readMoving(bridge) {
    Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (input) => {
      this.validateMoving(input);
      const round = this.bridgeGame.move();

      this.proceedRound(bridge, round, input);
    });
  },

  proceedRound(bridge, round, upDown) {
    const [up, down, gameResult] = this.bridgeGame.makeMap(bridge[round - 1], upDown);
    OutputView.printMap(up, down);

    if (!gameResult) this.readGameCommand(bridge);
    else if (round === bridge.length && gameResult) {
      const totalTry = this.bridgeGame.countTry();
      OutputView.printResult(totalGame, gameResult, [up, down]);
    } else this.readMoving(bridge);
  },

  validateMoving(upDown) {
    if (upDown !== 'U' && upDown !== 'D')
      throw new Error('[ERROR] 이동할 칸("U" 또는 "D")을 입력해주세요.');
  },

  readGameCommand(bridge) {
    Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)', (input) => {
      this.validateGameCommand(input);
      this.restartGame(bridge, input);
    });
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
    if (this.restartGame === 'Q') {
      OutputView.printResult(totalGame, false, this.bridgeGame.getBridge());
    }
  },
};

module.exports = InputView;
