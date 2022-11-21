const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');
const CheckBridgeSize = require('./validate/CheckBridgeSize');
const CheckUD = require('./validate/CheckUD');
const BridgeMaker = require('./BridgeMaker');
const { Console } = require('@woowacourse/mission-utils');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');

class Gameflow {
    size
    userUd = []

    constructor() {
      this.CheckBridgeSize  = new CheckBridgeSize ();
      this.CheckUD = new CheckUD();
    }
  
    start() {
      InputView.readBridgeSize((size) => {
        this.CheckBridgeSize .validate(size);
        this.size = size;
        this.createBridge();
      })
    }

    createBridge(){
      // Console.print(BridgeMaker.makeBridge(this.size,BridgeRandomNumberGenerator.generate));
      this.bridgeGame = new BridgeGame(BridgeMaker.makeBridge(this.size,BridgeRandomNumberGenerator.generate));
      this.userMoving();
    }
    
    userMoving(){
        InputView.readMoving((ud) => {
            this.CheckUD.validate(ud);
            this.userUd.push(ud);
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
      OutputView.printMap(this.userUd, 'X');
    };

    continueMove() {
      OutputView.printMap(this.userUd, 'O');
      this.userMoving();
    };
    

  
    endGame() {
      OutputView.printMap(this.userUd, 'O');
      OutputView.printResult(this.userUd, 'O');
    };
  

}

module.exports = Gameflow;