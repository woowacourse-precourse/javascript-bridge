const MissionUtils = require("@woowacourse/mission-utils");
const InputView=require("./InputView")
const BridegGame= require('./BridgeGame')
const bridge=new BridegGame();

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
let bridgePrinterAbove=[]
let bridgePrinterBelow=[]
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(userSpace,bridgeArray,count) {
    // count를 추가해주면서 idx를 추가
    console.log(userSpace,'Outputview',bridgeArray,count);
    let correctValue=this.printMapHelper(userSpace,bridgeArray,count)
    let bridgeLen=bridgeArray.length;
    console.log(bridgeLen,'다리 길이');
    // bridgePrinter=`[ ${correctValue==='O' ? 'O':' '} ]\n[ ${correctValue==='X' ? 'X':' '} ]`
    // MissionUtils.Console.print(bridgePrinterUp)
    console.log(bridgePrinterAbove);
    console.log(bridgePrinterBelow);
    return correctValue
  },
  printMapHelper(userSpace,bridgeArray,count){
    if(userSpace==='D'&&bridgeArray[count]===0){
      bridgePrinterAbove.push('')
      bridgePrinterBelow.push('O')
      return 'O'
    }
    if(userSpace==='U'&&bridgeArray[count]===1) {
      bridgePrinterBelow.push('')
      bridgePrinterAbove.push('O')
      return 'O'
    }
    else return 'X'
  },
  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridgeArray,count) {
    console.log('printresult');
    console.log(bridgeArray,count);
    if(bridgeArray.length!==0){
      MissionUtils.Console.print('게임 성공 여부: 실패')
      MissionUtils.Console.print(`총 시도한 횟수: ${count}`)
    }
    if(bridgeArray.length===0){
      MissionUtils.Console.print('최종 게임 결과')
    }
    MissionUtils.Console.close()
  },
};

module.exports = OutputView;
