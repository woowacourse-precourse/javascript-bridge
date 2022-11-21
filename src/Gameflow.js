const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');
const CheckBridgeSize = require('./validate/CheckBridgeSize');
const CheckInputUd = require('./validate/CheckInputUd');
const CheckInputRq = require('./validate/CheckInputRq');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');
const { MESSAGE } = require('./util/Constant');

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
        this.CheckBridgeSize .validate(size);
        this.size = size;
        this.createBridge();
      })
    }

    createBridge(){
      this.bridgeGame = new BridgeGame(BridgeMaker.makeBridge(this.size,BridgeRandomNumberGenerator.generate));
      this.userMoving();
    }


    userMoving(){
        InputView.readMoving((inputUd) => {
            this.CheckInputUd.validate(inputUd);
            this.userUd.push(inputUd);
            this.endCheck();
        })
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
      this.middleResult = MESSAGE.FAIL
      OutputView.printMap(this.userUd, 'X');
      this.askReplay();
    }

    continueMove() {
      OutputView.printMap(this.userUd, 'O');
      this.userMoving();
    }

    endGame() {
      this.middleResult = MESSAGE.SUCCESS
      OutputView.printMap(this.userUd, 'O');
      OutputView.printResult(this.userUd, 'O');
      OutputView.printFinalResult(this.count, this.middleResult);
    }


    askReplay() {
      InputView.readGameCommand((inputRq) => {
        this.CheckInputRq.validate(inputRq);
        this.checkingAskReplay(this.bridgeGame.retry(inputRq));
      });
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