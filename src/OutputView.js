const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require('./BridgeGame');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  
  //게임 시작문구 출력하기
  printGameStart(){ 
    MissionUtils.Console.print('다리 건너기 게임을 시작합니다.');
  },


  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(input, answer) {
    BridgeGame.move(input, answer);
    upperBridge += ']';
    lowerBridge += ']';

    MissionUtils.Console.print(upperBridge, lowerBridge)
  },


  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(input, ans) {
    MissionUtils.Console.print('최종 게임 결과');
    this.printMap(input, ans);
    this.printSuccess();
    this.printTryCount();
  },

  //성공여부 출력하기
  printSuccess(){
    MissionUtils.Console.print('게임 성공 여부: ');
    if(BridgeGame.isSuccess(input, answer)){
      MissionUtils.Console.print('성공');
    }else{
      MissionUtils.Console.print('실패');
    }
  },

  //시도횟수 출력하기
  printTryCount(){
    MissionUtils.Console.print('총 시도한 횟수: ');
    MissionUtils.Console.print(tryCount);
  }
};

module.exports = OutputView;
