const MissionUtils = require('@woowacourse/mission-utils');
const Exception = require('./Exception');
const ConstValues = require('./ConstValues');

//사용자로부터 입력을 받는 역할을 한다.

const InputView = {
  //다리의 길이를 입력받는다.
  readBridgeSize(afterReadBridgeSize) {
    MissionUtils.Console.readLine('다리의 길이를 입력해주세요.\n', (bridgeLength) => {
      //예외 발생 시 다리 길이 다시 입력받음
      try{
        new Exception().exceptBridgeLength(bridgeLength);
      }catch(e){
        return this.readBridgeSize(afterReadBridgeSize)
      }

      afterReadBridgeSize(bridgeLength);
    });
  },

  //사용자가 이동할 칸을 입력받는다.
  readMoving(BridgeGame) {
    MissionUtils.Console.readLine('이동할 칸을 선택해 주세요.\n', (movingUpDown) => {
      try{
        new Exception().exceptMovingUpDown(movingUpDown);
      }catch{
        return this.readMoving(BridgeGame)
      }

      this.innerReadMoving(movingUpDown, BridgeGame);
    });
  },

  innerReadMoving(movingUpDown, BridgeGame) {
    let [thisBridge, gameStatus] = BridgeGame.move(movingUpDown);

    if (gameStatus === ConstValues.PLAYING) {
      return this.readMoving(thisBridge);
    }
    if (gameStatus === ConstValues.FAILURE) {
      this.readGameCommand(thisBridge);
    }
  },

  //사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
  readGameCommand(BridgeGame) {
    MissionUtils.Console.readLine('게임을 다시 시도할지 여부를 입력해주세요.\n', (retryQuit) => {
      try{
        new Exception().exceptRetryQuit(retryQuit);
      }catch(e){
        return this.readGameCommand(BridgeGame)
      }
      
      this.innerReadGameCommand(retryQuit, BridgeGame);
    });
  },

  innerReadGameCommand(retryQuit, BridgeGame) {
    if (retryQuit === 'R') {
      BridgeGame.retry();
      return this.readMoving(BridgeGame);
    }
    if (retryQuit === 'Q') {
      BridgeGame.quit();
    }
  },
};

module.exports = InputView;
