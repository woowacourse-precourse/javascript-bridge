const MissionUtils = require("@woowacourse/mission-utils");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  //게임 시작문구 출력하기
  printGameStart(){ 
    MissionUtils.Console.print('다리 건너기 게임을 시작합니다.');
  },

  cmpUD(input, ans){
    return input == ans ? 'O':'X';
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(Input, answer) {
    let upperBridge = '[ ';
    let lowerBridge = '[ ';

    for(let i = 0; i < Input.length; i++){
      if(i != 0){
        upperBridge += '| ';
        lowerBridge += '| ';
      }
      if(Input[i] == 'U'){
        upperBridge += this.cmpUD(Input[i], answer[i]) + ' ';
        lowerBridge += '  ';
      }
      if(Input[i] == 'D'){
        lowerBridge += this.cmpUD(Input[i], answer[i]) + ' ';
        upperBridge += '  ';
      }
    }

    upperBridge += ']';
    lowerBridge += ']';

    MissionUtils.Console.print(upperBridge, lowerBridge)
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(userInput, ans) {
    MissionUtils.Console.print('최종 게임 결과');
    this.printMap(userInput, ans);
    this.printSuccess();

  },

  //성공여부 반환하기
  isSuccess(input, ans){
    let idx = input.length - 1;
    return input[idx] == ans[idx];
  },

  //성공여부 출력하기
  printSuccess(){
    MissionUtils.Console.print('게임 성공 여부: ');
    if(this.isSuccess(userInput, ans)){
      MissionUtils.Console.print('성공');
    }else{
      MissionUtils.Console.print('실패');
    }
  }
};

module.exports = OutputView;
