const MissionUtils = require("@woowacourse/mission-utils");
const Notice = require("./NoticeMessage.js")

const OutputView = {
  
  makePrintable(side){
    let printSide = ""
    printSide += Notice.START_PRINT
    for(let i = 0; i<side.length; i++){
      if (i == side.length-1){
        printSide += side[i] + Notice.END_PRINT
        return printSide
      }
      printSide += side[i] + Notice.NEXT_STEP
    }
  },

  printMap(upside, downside) {
    const printupside = this.makePrintable(upside)
    const printdownside = this.makePrintable(downside) + "\n"
    MissionUtils.Console.print(printupside)
    MissionUtils.Console.print(printdownside)
  },

  printResult(upside, downside, status, trynum) {
    MissionUtils.Console.print(Notice.RESULT_GAME)
    this.printMap(upside,downside)
    MissionUtils.Console.print(Notice.SUCCES_NOT + status)
    MissionUtils.Console.print(Notice.TRY_NUM + trynum)
    MissionUtils.Console.close()
  },
};

module.exports = OutputView;
