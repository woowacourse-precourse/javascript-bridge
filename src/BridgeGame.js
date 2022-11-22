const MissionUtils = require("@woowacourse/mission-utils");
const App = require("./App");
const OutputView = require('./OutputView');
class BridgeGame {
  num;
  bridges =[];
  arr1 = [];
  arr2 = [];
    
  constructor(bridge){
    this.num=0;
    this.bridges = bridge;
    this.arr1= [];
    this.arr2= [];
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  async move(input,turn) {
    if(input == this.bridges[turn]){
      if(input == 'D'){
        this.arr1.push('O');
        this.arr2.push(' ');
      }
      else if(input == 'U'){
        this.arr1.push(' ');
        this.arr2.push('O');
      }
      OutputView.printMap(this.arr1,this.arr2);
      return true;
    }
    else{
      if(input == 'D'){
        this.arr1.push('X');
        this.arr2.push(' ');
      }
      else if(input == 'U'){
        this.arr1.push(' ');
        this.arr2.push('X');
      }
      OutputView.printMap(this.arr1,this.arr2);
      return false;
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(input) {
    return input == 'R'
  }
}

module.exports = BridgeGame;
