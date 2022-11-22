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
    //삭제해야함
    MissionUtils.Console.print(this.#answerBirdgeList)
    this.getMove()
  }

  compare(moveInput){
    const compareMove = this.bridgeGame.move(moveInput,this.#answerBirdgeList);

    
    OutputView.printMap(this.bridgeGame.upList,this.bridgeGame.downList);
    if(compareMove === 'END') this.finalResult();
    else if(compareMove) this.getMove();
    if(!compareMove) this.getRetryOrStop();
  }
  

  getRetryOrStop(){
    InputView.readGameCommand(this.judgment.bind(this));
  }

  judgment(reTryOrStop){
    if(reTryOrStop === "R"){
      this.bridgeGame.retry()
      this.getMove()
    }
    if(reTryOrStop === "Q") this.GameStop()
  }
  
  finalResult(){
    MissionUtils.Console.close();
  }
  GameStop(){
    MissionUtils.Console.close();
  }

}

module.exports = Controller;