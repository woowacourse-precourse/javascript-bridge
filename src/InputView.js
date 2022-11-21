const Io = require("./Io");
const Validation = require('./Validation');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeMaker = require('./BridgeMaker');
const BridgeCompare = require('./BridgeCompare');
const OutputView = require('./OutputView');
const { output } = require("./Io");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
      Io.input('다리의 길이를 입력해주세요.', (input) => {
        Validation.validatePositiveInteger(input);
        Validation.validateNumberRange(input);
        const SIZE = Number(input);
        const BridgeStatus = BridgeMaker.makeBridge(SIZE, BridgeRandomNumberGenerator.generate);
        callback(SIZE, BridgeStatus);
      });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(SIZE, BridgeStatus, BridgeIndex, BridgeResultArray) {
    Io.input('이동할 칸을 선택해주세요. (위: U, 아래: D)', (userChoice) => {
      Validation.validateUserChoice(userChoice);
      console.log(BridgeStatus, userChoice);
      const NowBridgeValue = BridgeStatus[BridgeIndex];
      const CompareResult = BridgeCompare.isSameBridge(userChoice, NowBridgeValue);
      BridgeResultArray = BridgeCompare.makeBridgeResultArray(userChoice, CompareResult, BridgeResultArray);
      OutputView.printMap(BridgeResultArray);
      const NextBridgeSize = BridgeIndex + 1;
      if(BridgeCompare.isCompleteBridge(SIZE, NextBridgeSize)) {
        OutputView.printResult(BridgeResultArray, CompareResult, 10);      
      }
      if(CompareResult){
        this.readGameCommand();
      } 
      this.readMoving(SIZE, BridgeStatus, NextBridgeSize, BridgeResultArray);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    // OutputView.printResult(BridgeResultArray, CompareResult, count);
  },
};

module.exports = InputView;
