const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;

const OutputView = {

  upper : [],

  downer : [],

  addValue(upperValue, downerValue){
    this.upper.push(upperValue);
    this.downer.push(downerValue);
  },


  pushResult(dir, success){
    if(success){
      if(dir === "U") this.addValue("O", " ");
      if(dir === "D") this.addValue(" ", "O");
    }
    else{
      if(dir === "U") this.addValue("X", " ");
      else this.addValue(" ", "X");
    }
  },


  printMap() {
    const [upperStr, downStr] = ["[ "+this.upper.join(' | ')+" ]", "[ "+this.downer.join(' | ')+" ]"];
    Console.print(upperStr);
    Console.print(downStr);
  },

 
  printResult(gameCount,success) {
    Console.print("최종 게임 결과");
    this.printMap();
    const result = success ? "성공" : "실패";
    Console.print(`게임 성공 여부: ${result}`);
    Console.print(`총 시도한 횟수: ${gameCount}`);
    Console.close();
  },
};

module.exports = OutputView;
