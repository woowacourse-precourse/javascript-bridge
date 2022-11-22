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
    let upperBridge = '[ ';
    let lowerBridge = '[ ';
    repeatVerifyInputAndAnswer(input, answer);
    upperBridge += ']';
    lowerBridge += ']';

    MissionUtils.Console.print(upperBridge, lowerBridge)
  },

  //다리 칸 구분 출력하기
  printSpaceDivision(){
    upperBridge += '| ';
    lowerBridge += '| ';
  },

  //사용자 입력과 정답이 맞는지 검증하기
  verifyInputAndAnswer(input, answer){
    if(input[i] == 'U'){
      upperBridge += this.cmpUD(input[i], answer[i]) + ' ';
      lowerBridge += '  ';
    }
    if(input[i] == 'D'){
      lowerBridge += this.cmpUD(input[i], answer[i]) + ' ';
      upperBridge += '  ';
    }
  },

  //사용자 입력 개수만큼 검증과정 반복하기
  repeatVerifyInputAndAnswer(input, answer){
    for(let i = 0; i < input.length; i++){
      if(i != 0){
        this.printSpaceDivision();
      }
      this.verifyInputAndAnswer(input, answer);   
    }
  },

  //사용자 입력과 정답이 같은지 확인하기
  cmpUD(input, ans){
    return input == ans ? 'O':'X';
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
