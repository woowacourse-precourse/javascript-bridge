const { Console } = require("@woowacourse/mission-utils");
const {CheckBridgeSizeException, CheckUserMove, CheckWhetherGameRunning} = require("./Exception");
const { makeBridge } = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");
const bridgeGame = new BridgeGame;
const OutputView = require("./OutputView");
const userBridgeCorrect = bridgeGame.userPickedUpOrDown;

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(){
    Console.readLine("다리의 길이를 입력해주세요" , (num) => {
      this.checkBridgeLengthExceptions(num);
      this.createRandomBridge(num);
    });
  },

  createRandomBridge(num){
    this.createBridge = makeBridge(num, generate);
    this.readMoving();
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
    Console.readLine("이동할 칸을 선택해주세요. (위: U, 아래: D", (selectUpOrDown) => {
      this.checkUserMoveException(selectUpOrDown);
      bridgeGame.move(this.createBridge, selectUpOrDown);
      OutputView.printMap(userBridgeCorrect[0], userBridgeCorrect[1]);
      this.userPickedIsWrong(userBridgeCorrect);
      this.readMoving();
      OutputView.printResult(userBridgeCorrect[0] , userBridgeCorrect[1] , bridgeGame.attemptCount);
      this.readGameCommand();
    });
  },

  userPickedIsWrong(userBridgeCorrect){
    if(userBridgeCorrect[0].includes("X") || userBridgeCorrect[1].includes("X")){
      this.readGameCommand();
      
    }
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
    Console.readLine("게임을 다시 시도할지 여부를 입력해주세요. (재시도:R, 종료:Q)", (value) => {
    this.checkGameRunningException(value);
    this.gameRestart(value);
    this.gameFail(value);
    })
  },

  gameRestart(value){
    if(value == 'R'){
      bridgeGame.retry();
      this.readMoving();
    }
  },
  
  gameFail(value){
    if(value == 'Q'){
      OutputView.printFailResult(userBridgeCorrect[0], userBridgeCorrect[1], bridgeGame.attemptCount);
      Console.close();
    }
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