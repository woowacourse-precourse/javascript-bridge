const MissionUtils = require('@woowacourse/mission-utils');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const OutputView = require('./OutputView');
const BridgeGame = require('./BridgeGame');

const readLine = MissionUtils.Console.readLine;
const FIRST_GAME = 1;
const PLAYING = 'playing...';
const GAME_END = 'game end';
const FAILURE = 'failure';

//사용자로부터 입력을 받는 역할을 한다.

const InputView = {
  //다리의 길이를 입력받는다.
  //App클래스의 afterReadBridgeSize함수를 파라미터로 받음
  readBridgeSize(afterReadBridgeSize) {
    readLine('다리의 길이를 입력해주세요.\n', (bridgeLength) => {
      afterReadBridgeSize(bridgeLength);
    });
  },

  //사용자가 이동할 칸을 입력받는다.
  //BridgeGame클래스의 move함수를 파라미터로 받음
  readMoving(BridgeGame) {
    readLine('이동할 칸을 선택해 주세요.\n', (movingUpDown) => {
      let [thisBridge, gameStatus] = BridgeGame.move(movingUpDown);
      if (gameStatus === PLAYING) {
        return this.readMoving(thisBridge);
      }
      if (gameStatus === FAILURE) {
        this.readGameCommand(thisBridge);
      }
    });
  },

  //사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
  readGameCommand(BridgeGame) {
    readLine('게임을 다시 시도할지 여부를 입력해주세요.\n', (retryQuit) => {
      if (retryQuit === 'R') {
        BridgeGame.retry();
        return this.readMoving(BridgeGame);
      }
      if (retryQuit === 'Q') {
        BridgeGame.quit();
      }
    });
  },
};

module.exports = InputView;
