const { MissionUtils } = require("@woowacourse/mission-utils");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridges, guesses) {
    var printview = [[],[]];
    for (var i =0;i<guesses.length;i++){
      if (guesses[i] == true) printview = this.fillprintview_correct(i, printview, bridges, guesses);
      else printview = this.fillprintview_wrong(i, printview, bridges, guesses);
    }
    this.show_map(printview);
  },

  show_map(printview){
    const MissionUtils = require("@woowacourse/mission-utils");
    const strings = this.get_strings(printview);
    MissionUtils.Console.print(strings[0]);
    MissionUtils.Console.print(strings[1]);
  },

  get_strings(printview){
    var string1 = '[ '; var string2 = '[ ';
    for (var i =0;i<printview[0].length;i++){
      string1 += printview[0][i]; string2 += printview[1][i];
      if (i!=printview[0].length-1){
        string1 +=  '| '; string2 +=  '| ';
    }}
    string1 += ']'; string2+= ']';
    return [string1, string2];
  },

  fillprintview_correct(i, printview, bridges, guesses){
      if (bridges[i] == 'U') {
        printview[0].push("O ");
        printview[1].push("  ");
      } else {
        printview[0].push("  ");
        printview[1].push("O ");
      } return printview;
  },

  fillprintview_wrong(i, printview, bridges, guesses){
    if (bridges[i] == 'U') {
      printview[0].push("  ");
      printview[1].push("X ");
    } else {
      printview[0].push("X ");
      printview[1].push("  ");   
    } return printview;
},

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(success, trycount, guesses, bridges) {
    const MissionUtils = require("@woowacourse/mission-utils");
    MissionUtils.Console.print("최종 게임 결과");
    this.printMap(bridges, guesses);
    if (success == true){
      MissionUtils.Console.print("게임 성공 여부: 성공");
      MissionUtils.Console.print("총 시도한 횟수: " + trycount.toString());
    }else{   
    MissionUtils.Console.print("게임 성공 여부: 실패");
    MissionUtils.Console.print("총 시도한 횟수: " + trycount.toString());
  }},
};

module.exports = OutputView;
