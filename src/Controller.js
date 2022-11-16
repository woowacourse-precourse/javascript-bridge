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
}

module.exports = Controller;

//controller.getBridge(3);