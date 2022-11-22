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
    this.showResult;
    this.SUCCESS = "성공";
    this.FAILURE = "실패";
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

    this.showResult = OutputView.printMap(this.bridgeGame.upList,this.bridgeGame.downList);
    if(compareMove === 'END') this.finalResult(this.SUCCESS)
    else if(compareMove) this.getMove();
    else if(!compareMove) this.getRetryOrStop();
  }
  

  getRetryOrStop(){
    InputView.readGameCommand(this.judgment.bind(this));
  }

  judgment(reTryOrStop){
    if(reTryOrStop === "R"){
      this.bridgeGame.retry()
      this.getMove()
    }
    if(reTryOrStop === "Q") {
      this.finalResult(this.FAILURE)
      this.GameStop();
    }
    
  }

  finalResult(successOrFailure){
    OutputView.printResult(this.showResult,successOrFailure,this.bridgeGame.retryCount)
    this.GameStop();
    
  }
  GameStop(){
    MissionUtils.Console.close();
  }

}

module.exports = Controller;