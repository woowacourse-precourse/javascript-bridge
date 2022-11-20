const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;

const OutputView = {

  upper : [],

  downer : [],

  addValue(upperValue, downerValue){
    this.upper.push(upperValue);
    this.downer.push(downerValue);
  },


  pushResult(bridge,curIdx,success){
    if(success){
      if(bridge[curIdx-1] === "U") this.addValue(" O ", "   ");
      else this.addValue("   ", " O ");
    }
    else{
      if(bridge[curIdx-1] === "U") this.addValue(" X ", "   ");
      else this.addValue("   ", " X ");
    }
  },


  printMap() {
    const [upperStr, downStr] = ["["+this.upper.join('|')+"]", "["+this.downer.join('|')+"]"];
    Console.print(upperStr);
    Console.print(downStr);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(gameCount,success) {
    Console.print("최종게임결과");
    this.printMap();
    const result = success ? "성공" : "실패";
    Console.print(`게임 성공 여부 : ${실패}`);
    Console.print(`총 시도한 횟수: ${gameCount}`);
  },
};

module.exports = OutputView;
