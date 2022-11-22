const MissionUtils = require("@woowacourse/mission-utils");
const Output=require('./Output')
const STRINGS=require('./Const')
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
    const correctValue=this.printMapHelper(userSpace,bridgeArray)
    return correctValue
  },
  printMapHelper(userSpace,bridgeArray){
    if(userSpace==='D'&&bridgeArray[0]==='D'){
      Output.bridgePrinterAbove.push('empty');Output.bridgePrinterBelow.push('O');
      return 'O';
    }
    if(userSpace==="D"&&bridgeArray[0]==='U'){
      Output.bridgePrinterAbove.push('empty');Output.bridgePrinterBelow.push('X');
      return 'X';
    }    
    if(userSpace==='U'&&bridgeArray[0]==='U') {
      Output.bridgePrinterAbove.push('O');Output.bridgePrinterBelow.push('empty');
      return 'O';
    }
    if(userSpace==='U'&&bridgeArray[0]==='D') {
      Output.bridgePrinterAbove.push('X');Output.bridgePrinterBelow.push('empty');
      return 'X';
    }
  },
  initializeArray(){
    Output.bridgePrinterAbove=[]
    Output.bridgePrinterBelow=[]
  },
  printArrays(){
    let bridgeAbove=''
    let bridgeBelow=''
    bridgeAbove=JSON.stringify(Output.bridgePrinterAbove).replace(/,/g,'|')
    bridgeAbove=bridgeAbove.replace(/empty/g,' ')
    bridgeAbove=bridgeAbove.replace(/"/g,' ')
    bridgeBelow=JSON.stringify(Output.bridgePrinterBelow).replace(/,/g,'|')
    bridgeBelow=bridgeBelow.replace(/empty/g,' ')
    bridgeBelow=bridgeBelow.replace(/"/g,' ')
    return [bridgeAbove,bridgeBelow]
  },
  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printBridgeResult(gameInput){
    const [bridgeAbove,bridgeBelow]=this.printArrays()
    if(gameInput==='Q'){
      MissionUtils.Console.print(STRINGS.FINAL_RESULT)
    }
    MissionUtils.Console.print(bridgeAbove)
    MissionUtils.Console.print(bridgeBelow+'\n')
  },

  printResult(bridgeArray,count) {
    if(bridgeArray.length!==0){
      MissionUtils.Console.print(STRINGS.GAME_FAILED)
      MissionUtils.Console.print(`${STRINGS.TRY_COUNT} ${count}`)
    }
    if(bridgeArray.length===0){
      MissionUtils.Console.print(STRINGS.GAME_SUCESS)
      MissionUtils.Console.print(`${STRINGS.TRY_COUNT} ${count}`)
    }
    MissionUtils.Console.close()
  },
};

module.exports = OutputView;
