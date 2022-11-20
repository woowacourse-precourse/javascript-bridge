const MissionUtils = require("@woowacourse/mission-utils");
const InputView=require("./InputView")
const BridegGame= require('./BridgeGame')
const bridge=new BridegGame();

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(userSpace,bridgeArray) {
    console.log(userSpace,'Outputview',bridgeArray);
    let correctValue=this.printMapHelper(userSpace,bridgeArray)
    MissionUtils.Console.print(`[ ${correctValue==='O' ? 'O':' '} ]\n[ ${correctValue==='X' ? 'X':' '} ]`)
    return correctValue
  },
  printMapHelper(userSpace,bridgeArray){
    if(userSpace==='D'&&bridgeArray[0]===0){
      return 'O'
    }
    if(userSpace==='U'&&bridgeArray[0]===1) {
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
