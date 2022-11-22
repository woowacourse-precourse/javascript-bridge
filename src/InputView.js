const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */

let bridgeSize;

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridgeGame) {
    Console.readLine("다리의 길이를 입력해주세요.\n",(value) =>{
      bridgeGame.createBridge(value);
      this.readMoving(bridgeGame);
    });
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {
    Console.readLine("이동할 칸을 선택해주세요. (위: U, 아래: D)\n",(value) =>{
      const moveBridge = bridgeGame.move(value);
      this.repeatMoving(moveBridge,bridgeGame);
    });
  },
  
  repeatMoving(moveBridge,bridgeGame){
    console.log(moveBridge.upBridge,"\n" ,moveBridge.downBridge) // 출력 및 재시작 포함  
    if (moveBridge.upBridge.length != bridgeGame.bridgeBoard.length){
      if(bridgeGame.checkBridgeInX(moveBridge) == false){
        this.readGameCommand(bridgeGame);
      }
      else {
        this.readMoving(bridgeGame);
      }
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame) {
    Console.readLine("게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",(value) =>{
      if (value == "R"){
        bridgeGame.retry();
        this.readMoving(bridgeGame);
      }
      else if (value == "Q"){
        console.log("성공여부 및 시도 횟수");
        console.log(bridgeGame.tryCount, "trycount");
      }
    });
  },
};



module.exports = InputView, bridgeSize;
