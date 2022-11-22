const BridgeBoard = require("./BridgeBoard");
const InputView = require("./InputView")
const OutputView = require('./OutputView')
const Validation = require('./Validations')
const ERROR = require('./Error');
const BridgeController = require("./BridgeController");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridgeBoard;
  #bridgeController;
  #round;
  #attempt;
  constructor() {
    this.#bridgeBoard = new BridgeBoard();
    this.#bridgeController = new BridgeController
    this.#round = 0;
    this.#attempt = 1;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    try{
      Validation.validateCommand(['U','D'], ERROR.notPlayCommand, direction)
      this.decideSuccess(direction)
    }catch(error){
      this.#bridgeController.printError(error, this.#bridgeController.moveBlock ,this)
    }
  }
  decideSuccess(direction){
    if (this.#bridgeBoard.moveTo(direction)) {
      this.clearRound();
    }else{
      this.faildRound(direction);
    }
  }
  clearRound(){
    this.#bridgeBoard.movePlayer();
    if(this.#bridgeBoard.isLastRound()){
      this.printFinalRound();
    }else{
      this.moveNextRound(this.#bridgeBoard.getClearedBridge())
    }
  }
  
  moveNextRound(board){
    this.#round++;
    this.#bridgeController.moveNext(board, this);
  }

  printFinalRound(){
    this.#bridgeController.moveFinalRound(this.#attempt,this.#bridgeBoard.getClearedBridge())
  }

  faildRound(direction){
    this.#bridgeController.moveFailedRound(this.#attempt,this.#bridgeBoard.getClearedBridge(),direction)
    this.#bridgeController.readGameCommand(this)
  }

  setGameCommand(command){
    try{
      Validation.validateCommand(['R','Q'], ERROR.notGameCommand, command)
      if(command === 'Q'){
        this.#bridgeController.close()
      }else{
        this.retry();
      }
    }catch(error){
      this.#bridgeController.printError(error, this.#bridgeController.readGameCommand ,this)
    }
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#attempt++;
    this.#round=0;
    this.#bridgeBoard.resetBoard();
    this.#bridgeController.moveBlock(this);
  }

  play(size) {
    try{
      this.validateSize(size)   
      this.#bridgeBoard.makeBoard(size);
      this.#bridgeController.moveBlock(this)
    }catch(error){
      this.#bridgeController.printError(error, this.#bridgeController.readSize,this)
    }
  }
  
  validateSize(size){
    Validation.validateNumber(size);
    Validation.validateRange([3,20],size);
  }
}

module.exports = BridgeGame;
