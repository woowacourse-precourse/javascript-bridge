/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");
 
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine('다리의 길이를 입력해주세요.\n', (bridgeSize) => {
      const bstring = BridgeMaker.makeBridge(parseInt(bridgeSize), BridgeRandomNumberGenerator.generate); // return 값으로 현재까지의 다리 
      console.log(bstring);

      this.readMoving(bridgeSize, bstring, (direction) => {

        console.log(direction);
      });
      
      //this.readMoving(bridgeSize, bstring);
      
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeSize, bstring, callback) {
    for(let i = 0; i < bridgeSize; i++){
      
      MissionUtils.Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)\n', callback);

    }
    
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    MissionUtils.Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n', (restartInput) => {
      console.log("restart: ", restartInput);
    });

  },
};

module.exports = InputView;
