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
