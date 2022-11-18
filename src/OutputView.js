const MissionUtils = require("@woowacourse/mission-utils");
const Notice = require("./NoticeMessage.js")
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
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
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(upside, downside) {
    const printupside = this.makePrintable(upside)
    const printdownside = this.makePrintable(downside) + "\n"
    MissionUtils.Console.print(printupside)
    MissionUtils.Console.print(printdownside)
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(upside, downside, trynum) {
    console.log(trynum)
  },
};

module.exports = OutputView;
