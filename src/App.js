const { Console } = require('@woowacourse/mission-utils');
const BridgeMaker = require('./BridgeMaker');
const InputView = require('./InputView')

class App {
  play(){
    this.makeBridge()
  }

  makeBridge(){
    InputView.readBridgeSize()
  }


}

module.exports = App;
