const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const inputView = require('./view/InputView');

class Controller{
  constructor(){
    this.bridgeAnswer = [];
  }
  startGame(){
    inputView.readBridgeSize();
  }

  getBridge(input){
    const bridgeAnswer = BridgeMaker.makeBridge(input, BridgeRandomNumberGenerator.generate);
    this.bridgeAnswer = bridgeAnswer;
    inputView.readMoving(this.bridgeAnswer);
  }
}

const controller = new Controller();
module.exports = controller;