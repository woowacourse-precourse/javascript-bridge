const Io = require("./Io");
const Validation = require('./Validation');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeMaker = require('./BridgeMaker');
const BridgeCompare = require('./BridgeCompare');
const OutputView = require('./OutputView');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
      Io.input('다리의 길이를 입력해주세요.', (userInput) => {
        Validation.validatePositiveInteger(userInput);
        Validation.validateNumberRange(userInput);
        const SIZE = Number(userInput);
        const BridgeStatus = BridgeMaker.makeBridge(SIZE, BridgeRandomNumberGenerator.generate);
        callback(SIZE, BridgeStatus);
      });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(SIZE, BridgeStatus, BridgeIndex, BridgeResultArray) {
    Io.input('이동할 칸을 선택해주세요. (위: U, 아래: D)', (userInput) => {
      Validation.validateUserChoice(userInput);
      console.log(BridgeStatus, userInput);
      const NowBridgeValue = BridgeStatus[BridgeIndex];
      const CompareResult = BridgeCompare.isSameBridge(userInput, NowBridgeValue);
      BridgeResultArray = BridgeCompare.makeBridgeResultArray(userInput, CompareResult, BridgeResultArray);
      OutputView.printMap(BridgeResultArray);
      const NextBridgeSize = BridgeIndex + 1;
      if(BridgeCompare.isCompleteBridge(SIZE, NextBridgeSize)) {
        OutputView.printResult(BridgeResultArray, CompareResult, 10);      
      }
      if(CompareResult){
        this.readGameCommand(BridgeResultArray, CompareResult);
      } 
      this.readMoving(SIZE, BridgeStatus, NextBridgeSize, BridgeResultArray);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(BridgeResultArray, CompareResult) {
    Io.input('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)', (userInput) => {
      if(userInput === 'R'){

      }
      if(userInput == 'Q'){
        
      }
    })
  },
};

module.exports = InputView;
