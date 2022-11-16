const MissionUtils = require('@woowacourse/mission-utils');
const { CONSOLELINE } = require('./utils/Constants');
const inputView = require('./view/InputView');

class Controller{
  constructor(){
    this.bridgeAnswer = [];
  }
  startGame(){
    MissionUtils.Console.print(CONSOLELINE.START_GAME);
    inputView.readBridgeSize();
  }
}

module.exports = Controller;
