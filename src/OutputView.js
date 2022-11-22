const  MissionUtils  = require("@woowacourse/mission-utils");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(arr1,arr2) {
    let tempStr1 ="";
    tempStr1+='[';
    for(let i=0; i< arr1.length; i++){
      
      if(i==arr1.length-1) tempStr1+=` ${arr1[i]} `;
      else tempStr1+=` ${arr1[i]} |`;
    }
    tempStr1+=']\n';

    let tempStr2 ="";
    tempStr2+='[';
    for(let i=0; i< arr2.length; i++){
      
      if(i==arr2.length-1) tempStr2+=` ${arr2[i]} `;
      else tempStr2+=` ${arr2[i]} |`;
    }
    tempStr2+=']\n';
    tempStr2 = tempStr2 + tempStr1;
    MissionUtils.Console.print(tempStr2);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(succeess , tryGame) {
    
    let outputSuccess = "";
    if(succeess== true) outputSuccess = "성공";
    else outputSuccess ="실패";

    MissionUtils.Console.print(`게임 성공 여부: ${outputSuccess}\n`);
    // 여기에 성공 여부 넣는다.
    MissionUtils.Console.print(`총 시도한 횟수: ${tryGame}`);
    // 시도 횟수 넣는다.
  }
};

module.exports = OutputView;
