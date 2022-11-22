const { Console } = require("@woowacourse/mission-utils");
const {INPUT_MESSAGE} = require("../Constants");
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
    Console.readLine(INPUT_MESSAGE.BRIDGE_SIZE_MESSAGE , (num) => {
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
    Console.readLine(INPUT_MESSAGE.MOVE_MESSAGE, (selectUpOrDown) => {
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
    Console.readLine(INPUT_MESSAGE.GAME_RUNNING_MASSAGE, (value) => {
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