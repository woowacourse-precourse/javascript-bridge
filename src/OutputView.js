const MissionUtils = require("@woowacourse/mission-utils");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printInit(){
    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.\n");
  }, 
  printMap(bridge, moves) {
    var upperRoad = "[ ";
    var lowerRoad = "[ ";
    var icon = "";
    if(moves[i] == bridge[i]) icon = "O ";
    if(moves[i] != bridge[i]) icon = "X ";

    for(let i = 0; i < moves.length; i++) {
      if(moves[i] == "U") {
        upperRoad += icon;
        lowerRoad += "  ";
      } 
      if(moves[i] == "D") {
        upperRoad += "  ";
        lowerRoad += icon;
      } 
      upperRoad += "| ";
      lowerRoad += "| ";
    }

    upperRoad = upperRoad.slice(0, upperRoad.length-2);
    lowerRoad = lowerRoad.slice(0, lowerRoad.length-2);
    upperRoad += ']\n';
    lowerRoad += ']\n';
    MissionUtils.Console.print(upperRoad);
    MissionUtils.Console.print(lowerRoad);
  },
  printInput(){
    MissionUtils.Console.print('이동할 칸을 선택해주세요. (위: U, 아래: D)\n');
  },
  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(success, bridge, moves, count) {
    MissionUtils.Console.print("최종 게임 결과\n");
    this.printMap(bridge, moves);
    if(success) MissionUtils.Console.print("게임 성공 여부: 성공\n");
    if(!success) MissionUtils.Console.print("게임 성공 여부: 실패\n");
    MissionUtils.Console.print("총 시도한 횟수: " + count);
  },
};

module.exports = OutputView;
