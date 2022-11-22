const { Console } = require("@woowacourse/mission-utils");
const OutputView = require("./OutputView");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { readMoving,readBridgeSize } = require("./InputView");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  countBridge;
  bridgeBoard;
  moveBridge;

  constructor() {
    this.bridgeBoard = []
    this.moveBridge = { upBridge : [], downBridge : []}
  }

  createBridge(size){
    this.bridgeBoard = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator);
    console.log(this.bridgeBoard,"ehoTsk?")
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(InputValue) {
    const userBridgeIndex = this.moveBridge.downBridge.length;
    if (InputValue == "U"){
      return this.moveUp(InputValue, userBridgeIndex);
    }
    if (InputValue == "D") {
      return this.moveDown(InputValue, userBridgeIndex);
    }
  }

  moveUp(InputValue, index){
    if (InputValue == this.bridgeBoard[index]){
      this.moveBridge.upBridge.push("O");
      this.moveBridge.downBridge.push(" ");
    }
    else {
      this.moveBridge.upBridge.push("X");
      this.moveBridge.downBridge.push(" ");
    }
    return this.checkBridgeInX();
  }


  moveDown(InputValue,index){
    if (InputValue == this.bridgeBoard[index]){
      this.moveBridge.upBridge.push(" ");
      this.moveBridge.downBridge.push("O");
    }
    else {
      this.moveBridge.upBridge.push("X");
      this.moveBridge.downBridge.push(" ");
    }
    return this.checkBridgeInX();
  }

  checkBridgeInX(){
    if (this.moveBridge.upBridge.includes("X") != true && this.moveBridge.downBridge.includes("X") != true ){
      return this.moveBridge;
    }
    else{
      console.log(this.moveBridge);
      this.retry();
      return this.moveBridge;
    }
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    console.log("restart")
  }
}



module.exports = BridgeGame;
