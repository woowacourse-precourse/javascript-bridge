const OutputView = require('../View/OutputView');
const InputView = require('../View/InputView');
const BridgeMaker = require('../Model/BridgeMaker');
const {generate} = require('../util/BridgeRandomNumberGenerator');
const BridgeGame = require('../Model/BridgeGame')
const  MissionUtils  = require('@woowacourse/mission-utils');

class Controller {
  #answerBirdgeList;
  constructor(){
    this.#answerBirdgeList;
    this.bridgeGame = new BridgeGame();
  }
  start(){
    OutputView.printStart();
    this.getBridegeSize();
  }

  getBridegeSize(){ 
    InputView.readBridgeSize(this.getBirdgeAnswer.bind(this));  
  }

  getMove(){ 
    InputView.readMoving(this.compare.bind(this));
  }

  getBirdgeAnswer(sizeNumber){
    this.#answerBirdgeList = BridgeMaker.makeBridge(sizeNumber,generate);
    // MissionUtils.Console.print(this.#answerBirdgeList)
    this.getMove()
  }

  compare(moveInput){
    if(this.bridgeGame.move(moveInput,this.#answerBirdgeList)){
      OutputView.printMap(this.bridgeGame.upList,this.bridgeGame.downList)
      this.getMove()
    } else {
      OutputView.printMap(this.bridgeGame.upList,this.bridgeGame.downList)
    }
  }



}

module.exports = Controller;