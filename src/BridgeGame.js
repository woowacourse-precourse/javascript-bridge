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
  #try;
  constructor() {
    this.#bridgeBoard = new BridgeBoard();
    this.#bridgeController = new BridgeController
    this.#round = 0;
    this.#try = 1;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    Validation.validateCommand(['U','D'], ERROR.notGameCommand, direction)
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
    this.#bridgeController.moveFinalRound(this.#try,this.#bridgeBoard.getClearedBridge())
  }

  faildRound(direction){
    this.#bridgeController.moveFailedRound(this.#try,this.#bridgeBoard.getClearedBridge(),direction)
    this.#bridgeController.readGameCommand(this)
  }

  setGameCommand(command){
    if(command === 'Q'){
      this.#bridgeController.close()
    }else{
      this.retry();
    }
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#try++;
    this.#round=0;
    this.#bridgeBoard.resetBoard();
    this.#bridgeController.moveBlock(this);
  }

  play(size) {
    try{
      this.validateSize(size)   
    }catch(error){
      this.#bridgeController.printError(error, this)
    }
    this.#bridgeBoard.makeBoard(size);
    this.#bridgeController.moveBlock(this)
  }
  
  validateSize(size){
    Validation.validateNumber(size);
    Validation.validateRange([3,20],size);
  }
}

module.exports = BridgeGame;
