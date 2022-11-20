const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');
const CheckBridgeSize = require('./validate/CheckBridgeSize')
const CheckUD = require('./validate/CheckUD')
const BridgeMaker = require('./BridgeMaker');
const { Console } = require('@woowacourse/mission-utils');

class Gameflow {
    size

    constructor() {
      this.CheckBridgeSize  = new CheckBridgeSize ();
      this.CheckUD = new CheckUD();
    }
  
    start() {
      InputView.readBridgeSize((size) => {
        this.CheckBridgeSize .validate(size);
        this.size = size;
        Console.print(BridgeMaker.initializeBridge(size));
        this.userMoving();
      })
    }
    
    userMoving(){
        InputView.readMoving((chooseUD) => {
            this.CheckUD.validate(chooseUD);
        })
    }

}

module.exports = Gameflow;