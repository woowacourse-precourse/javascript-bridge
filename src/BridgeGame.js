/**
 * 다리 건너기 게임을 관리하는 클래스
 * InputView, OutputView 를 사용하지 않는다.
 */
class BridgeGame {
  constructor(){
    this.inputCount = 0;
    this.upper = [];
    this.lower = [];
    this.moveResult = '';
    this.tryCount = 1;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(input, bridge) {
    if(input === bridge[this.inputCount]){
      this.inputCount++;
      this.moveResult = 'O'
      return this.makeMap(input)
    }
    if(input !== bridge[this.inputCount]){
      this.inputCount++;
      this.moveResult = 'X'
      return this.makeMap(input)
    }
  }

  makeMap(input){
    if(input === 'U') {
      this.upper.push(this.moveResult);
      this.lower.push(' ')
    }
    if(input === 'D') {
      this.upper.push(' ')
      this.lower.push(this.moveResult);
    }
    return [this.upper,this.lower];
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.inputCount = 0;
    this.upper = []
    this.lower = []
    this.tryCount = this.tryCount + 1 
  }
}

module.exports = BridgeGame;