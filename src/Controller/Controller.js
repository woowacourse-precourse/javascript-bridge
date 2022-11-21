const OutputView = require('../View/OutputView');
const InputView = require('../View/InputView');
const BridgeMaker = require('../Model/BridgeMaker');
const {generate} = require('../util/BridgeRandomNumberGenerator');
const  MissionUtils  = require('@woowacourse/mission-utils');

class Controller {
  #answerBirdgeList;
  constructor(){
    this.#answerBirdgeList;
  }
  start(){
    OutputView.printStart();
    this.askBridegeSize();
  }

  askBridegeSize(){
    InputView.readBridgeSize(this.getBirdgeAnswer.bind(this));
    
  }

  getBirdgeAnswer(sizeNumber){
    this.#answerBirdgeList = BridgeMaker.makeBridge(sizeNumber,generate);
  }



}

module.exports = Controller;