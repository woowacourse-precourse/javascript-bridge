const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');
const CheckBridgeSize = require('./validate/CheckBridgeSize');
const CheckInputUd = require('./validate/CheckInputUd');
const CheckInputRq = require('./validate/CheckInputRq');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');
const { RESULT, OX } = require('./util/Constant');

class Gameflow {
    size
    userUd = []
    count = 1
    middleResult

    constructor() {
      this.CheckBridgeSize  = new CheckBridgeSize ();
      this.CheckInputUd = new CheckInputUd();
      this.CheckInputRq = new CheckInputRq();
    }
  
    start() {
      InputView.readBridgeSize((size) => {
        this.isValidBridgeSize(this.CheckBridgeSize .validate(size),size)
      })
    }

    isValidBridgeSize(valitation, size) {
      if (!valitation) {
        return this.start();
      };
      this.size = size;
      return this.createBridge();
    }

    createBridge(){
      this.bridgeGame = new BridgeGame(BridgeMaker.makeBridge(this.size,BridgeRandomNumberGenerator.generate));
      this.userMoving();
    }


    userMoving(){
        InputView.readMoving((inputUd) => {
            this.isValidUpdown(this.CheckInputUd.validate(inputUd), inputUd);
        })
    }

    isValidUpdown(valitation, inputUd) {
      if (!valitation) {
        return this.userMoving();
      };
      this.userUd.push(inputUd);
      return this.endCheck();
    }


    endCheck() {
      switch (this.bridgeGame.move(this.userUd)) {
        case 0:
          return this.wrongInputMove();
        case 1:
          return this.continueMove();
        case 2:
          return this.endGame();
      };
    }
    
    wrongInputMove() {
      this.middleResult = RESULT.FAIL
      OutputView.printMap(this.userUd, OX.WRONG);
      this.askReplay();
    }

    continueMove() {
      OutputView.printMap(this.userUd, OX.CORRECT);
      this.userMoving();
    }

    endGame() {
      this.middleResult = RESULT.SUCCESS
      OutputView.printMap(this.userUd, OX.CORRECT);
      OutputView.printResult(this.userUd, OX.CORRECT);
      OutputView.printFinalResult(this.count, this.middleResult);
    }


    askReplay() {
      InputView.readGameCommand((inputRq) => {
        this.isValidRepalyQuit(this.CheckInputRq.validate(inputRq), inputRq);
      });
    }

    isValidRepalyQuit(valitation, inputRq) {
      if (!valitation) {
        return this.askReplay();
      };
      return this.checkingAskReplay(this.bridgeGame.retry(inputRq));
    }

    checkingAskReplay(inputRq) {
      if(inputRq) {
        this.count += 1;
        this.userUd = [];
        return this.userMoving();
      };
      OutputView.printResult(this.userUd, this.middleResult);
      OutputView.printFinalResult(this.count, this.middleResult);
    }
}


module.exports = Gameflow;