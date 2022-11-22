const BridgeBoard = require("./BridgeBoard");
const InputView = require("./InputView")
const OutputView = require('./OutputView')
const Validation = require('./Validations')
const ERROR = require('./Error')
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridgeBoard;
  #round;
  #try;
  constructor() {
    this.#bridgeBoard = new BridgeBoard();
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
      this.faildRound();
    }
  }

  clearRound(){
    this.#bridgeBoard.movePlayer();
    if(this.#bridgeBoard.isLastRound()){
      this.moveFinalRound();
    }else{
      this.moveNextRound(this.#bridgeBoard.getClearedBridge())
    }
  }
  
  moveNextRound(board){
    this.#round++;
    OutputView.printMap(board);
    InputView.readMoving(this);
  }

  moveFinalRound(){
    OutputView.printResult(this.#try,this.#bridgeBoard.getClearedBridge());
  }

  faildRound(){
    OutputView.printFailResult(this.#try,this.#bridgeBoard.getClearedBridge());
    InputView.readGameCommand(this);
  }
  setGameCommand(command){
    if(command === 'Q'){
      OutputView.close();
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
    InputView.readMoving(this);
  }

  play(size) {
    try{
      this.validateSize(size)
      this.#bridgeBoard.makeBoard(size);
      InputView.readMoving(this);      
    }catch(error){
      OutputView.printError(error)
      InputView.readBridgeSize
    }
  }

  validateSize(size){
    Validation.validateNumber(size);
    Validation.validateRange([3,20],size);
  }
}

module.exports = BridgeGame;
