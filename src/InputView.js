const MissionUtils = require('@woowacourse/mission-utils');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');
const Check = require('./Check');

const InputView = {
  readBridgeSize() {
    MissionUtils.Console.readLine('다리의 길이를 입력해주세요.\n', (size) => {
      const brige = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
      const gamePlay = new BridgeGame(brige);
      this.readMoving(gamePlay);
    });
  },

  readMoving(gamePlay) {
    const playerInput = (moving) => {
      const isGameOver = gamePlay.move(moving);
      if (isGameOver) {
        this.readGameCommand(gamePlay);
      }
      return this.readMoving(gamePlay);
    };
    MissionUtils.Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래:D)\n', playerInput);
  },

  readGameCommand(gamePlay) {
    MissionUtils.Console.readLine('게임을 종료합니다.게임을 재시도하려면 R, 종료하려면 Q를 눌러주세요.', (answer) => {
      if (Check.CheckRestartGame(answer, gamePlay)) this.readMoving(gamePlay);
    });
  },
};

module.exports = InputView;
