const { Console } = require("@woowacourse/mission-utils");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor(){
    this.upBridgeList = [];
    this.downBridgeList = [];
    this.count = 0;
    this.retryCount = 1;
  }

  setCount(){
    this.count += 1;
  }

  getCount(){
    return this.count;
  }

  getUpBridgeList(){
    return this.upBridgeList;
  }

  getDownBridgeList(){
    return this.downBridgeList;
  }


  isWrong(upBridge,downBridge){
    if(upBridge.includes("X") || downBridge.includes("X")) return true;

    return false;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  move(space,bridge) {
    const standardBridge = bridge.getBridge();;
    let count = this.getCount();

    if(space === "U") this.upMove(standardBridge,count);
    if(space === "D") this.downMove(standardBridge,count);
    

    this.setCount();
    Console.print(this.getCount());
  }

  upMove(standardBridge,count){
    if(standardBridge[count] === "U"){
      return (
        this.upBridgeList.push('O'),
        this.downBridgeList.push(' ')
      )
    }
    this.upBridgeList.push('X');
    this.downBridgeList.push(' ');
  }

  downMove(standardBridge,count){
    if(standardBridge[count] === "D"){
      return (
        this.upBridgeList.push(' '),
        this.downBridgeList.push('O')
      )
    }
    this.upBridgeList.push(' ');
    this.downBridgeList.push('X');
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  setCountRetry(){
    this.retryCount += 1;
    this.count = 0;
  }

  getCountRetry(){
    return this.retryCount;
  }

  retry(bridge) {
    Console.print("재시작")
    this.setCountRetry();
    this.upBridgeList = [];
    this.downBridgeList = [];
  }
}

module.exports = BridgeGame;
