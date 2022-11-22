const { Console } = require("@woowacourse/mission-utils");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor(){
    this.bridgeList;
    this.count = 0;
  }

  setCount(){
    this.count += 1;
  }

  getCount(){
    return this.count;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(space,bridge) {
    const standardBridge = bridge.getBridge();;
    let count = this.getCount();

    Console.print(standardBridge);
    if(space === "U") this.upMove(standardBridge,count);
    if(space === "D") this.downMove(standardBridge,count);

    this.setCount();
    return this.bridgeList;
  }

  upMove(standardBridge,count){
    if(standardBridge[count] === "U"){
      return (
        this.bridgeList[1].push('O'),
        this.bridgeList[0].push(' ')
      )
    }
    this.bridgeList[1].push('X');
    this.bridgeList[0].push(' ');
  }

  downMove(standardBridge,count){
    if(standardBridge[count] === "D"){
      return (
        this.bridgeList[1].push(' '),
        this.bridgeList[0].push('O')
      )
    }
    this.bridgeList[1].push(' ');
    this.bridgeList[0].push('X');
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
