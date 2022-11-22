const OutputView = require("../views/OutputView.js")
const InputView = require("../views/InputView")
const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator.js")
const BridgeMaker = require("../BridgeMaker.js");
const BridgeGame = require("../BridgeGame.js");
const { SUCCESS, FAIL, RESTART, QUIT, WRONG } = require("../utils/constant")

class Controller{
  #bridgeGame;
  #bridge;
  #playerMoveList;
  #gameResult;
  #bridgeSize;

  constructor(){
    this.#playerMoveList = []
  }

  gameStart(){
    OutputView.printGameStart()
    this.createBridge();
  }

  createBridge(){
    InputView.readBridgeSize((bridgeSize)=>{
      this.#bridgeSize=bridgeSize
      this.#bridge=BridgeMaker.makeBridge(this.#bridgeSize, BridgeRandomNumberGenerator.generate);
      this.#bridgeGame= new BridgeGame(this.#bridge);
      this.playerMoving();
    })
  }

  playerMoving(){
    InputView.readMoving((playerMove)=>{
      this.#playerMoveList=this.moveListPush(this.#playerMoveList, playerMove)
      this.#gameResult=this.#bridgeGame.move(this.#playerMoveList, this.#bridgeSize);
      OutputView.printMap(this.#gameResult);
      if(this.#gameResult.includes(WRONG)) return this.gameRetry();
      if(this.#playerMoveList.length===Number(this.#bridgeSize)) return OutputView.printResult(this.#gameResult, SUCCESS, this.#bridgeGame.getTotalTry())
      this.playerMoving();
    })
  }

  gameRetry(){
    InputView.readGameCommand((answer)=>{
      if(answer===QUIT) OutputView.printResult(this.#gameResult, FAIL, this.#bridgeGame.getTotalTry())
      if(answer===RESTART) {
        this.#bridgeGame.retry();
        this.#playerMoveList=[]
        this.playerMoving();
      }
    })
  }

  moveListPush(list, move){
    list.push(move)
    return list;
  }
}

module.exports = Controller