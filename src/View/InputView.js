const { Console } = require("@woowacourse/mission-utils");
const {CheckBridgeSizeException, CheckUserMove, CheckWhetherGameRunning} = require("../Exception");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(){
    let bridgeSize;
    Console.readLine("다리의 길이를 입력해주세요" , (num) => {
      this.checkBridgeLengthExceptions(num);
      bridgeSize = num;
    });
    return bridgeSize;
  },

  checkBridgeLengthExceptions(num){
    try{
      new CheckBridgeSizeException(num);
    } catch(err){
      Console.print(err);
      this.readBridgeSize();
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    let userMove;
    Console.readLine("이동할 칸을 선택해주세요. (위: U, 아래: D", (selectUpOrDown) => {
      this.checkUserMoveException(selectUpOrDown);
      userMove = selectUpOrDown; 
    });
    return userMove;
  },

  checkUserMoveException(selectUpOrDown){
    try{
      new CheckUserMove(selectUpOrDown);
    } catch(err){
      Console.print(err);
      this.readMoving();
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    let gameSelect;
    Console.readLine("게임을 다시 시도할지 여부를 입력해주세요. (재시도:R, 종료:Q)", (value) => {
      this.checkGameRunningException(value);
      gameSelect = value;
    })
    return gameSelect;
  },

  checkGameRunningException(value){
    try { 
      new CheckWhetherGameRunning(value);
    } catch(err){
      Console.print(err);
      this.readGameCommand(value);
    }
  }
}

module.exports = InputView;