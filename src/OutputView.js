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

 
  printResult(gameCount,success) {
    Console.print("최종게임결과");
    this.printMap();
    const result = success ? "성공" : "실패";
    Console.print(`게임 성공 여부 : ${result}`);
    Console.print(`총 시도한 횟수: ${gameCount}`);
  },
};

module.exports = OutputView;
