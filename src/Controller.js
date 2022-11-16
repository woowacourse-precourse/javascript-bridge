const inputView = require('./view/InputView');

class Controller{
  constructor(){
  }
  startGame(){
    inputView.readBridgeSize();
  }
}

module.exports = Controller;