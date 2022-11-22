const { Console } = require("@woowacourse/mission-utils");
const { BRIDGE } = require("./Constant");
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
    if(upBridge.includes(BRIDGE.NOT_PASS) || downBridge.includes(BRIDGE.NOT_PASS)) return true;

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

    if(space === BRIDGE.UP) this.upMove(standardBridge,count);
    if(space === BRIDGE.DOWN) this.downMove(standardBridge,count);
    

    this.setCount();
  }

  upMove(standardBridge,count){
    if(standardBridge[count] === BRIDGE.UP){
      return (
        this.upBridgeList.push(BRIDGE.PASS),
        this.downBridgeList.push(' ')
      )
    }
    this.upBridgeList.push(BRIDGE.NOT_PASS);
    this.downBridgeList.push(' ');
  }

  downMove(standardBridge,count){
    if(standardBridge[count] === BRIDGE.DOWN){
      return (
        this.upBridgeList.push(' '),
        this.downBridgeList.push(BRIDGE.PASS)
      )
    }
    this.upBridgeList.push(' ');
    this.downBridgeList.push(BRIDGE.NOT_PASS);
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
    this.setCountRetry();
    this.upBridgeList = [];
    this.downBridgeList = [];
  }
}

module.exports = BridgeGame;
