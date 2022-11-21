const MissionUtils = require("@woowacourse/mission-utils");
const InputView=require("./InputView")
const BridegGame= require('./BridgeGame')
const bridge=new BridegGame();

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
bridgePrinterAbove=[]
bridgePrinterBelow=[]
// let bridgePrinterAbove=bridgePrinterAbove
// let bridgePrinterBelow=bridgePrinterBelow
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(userSpace,bridgeArray,restart) {
    const correctValue=this.printMapHelper(userSpace,bridgeArray,restart)
    // console.log(correctValue);
    return correctValue
  },
  printMapHelper(userSpace,bridgeArray){
    if(userSpace==='D'&&bridgeArray[0]==='D'){
      bridgePrinterAbove.push('empty')
      bridgePrinterBelow.push('O')
      return 'O'
    }
    if(userSpace==='U'&&bridgeArray[0]==='U') {
      bridgePrinterAbove.push('O')
      bridgePrinterBelow.push('empty')
      return 'O'
    }
    if(userSpace==="D"&&bridgeArray[0]==='U'){
      bridgePrinterAbove.push('empty')
      bridgePrinterBelow.push('X')
      return 'X'
    }    
    if(userSpace==='U'&&bridgeArray[0]==='D') {
      bridgePrinterAbove.push('X')
      bridgePrinterBelow.push('empty')
      return 'X'
    }
  },
  initializeArray(){
    bridgePrinterAbove=[]
    bridgePrinterBelow=[]
  },
  printArrays(bridgePrinterAbove,bridgePrinterBelow){
    // console.log(bridgePrinterAbove);
    // console.log(bridgePrinterBelow);
    let bridgeAbove=''
    let bridgeBelow=''
    bridgeAbove=JSON.stringify(bridgePrinterAbove).replace(/,/g,'|')
    bridgeAbove=bridgeAbove.replace(/empty/g,' ')
    bridgeAbove=bridgeAbove.replace(/"/g,' ')
    bridgeBelow=JSON.stringify(bridgePrinterBelow).replace(/,/g,'|')
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
    const [bridgeAbove,bridgeBelow]=this.printArrays(bridgePrinterAbove,bridgePrinterBelow)
    if(gameInput==='Q'){
      MissionUtils.Console.print('최종 게임 결과')
    }
    MissionUtils.Console.print(bridgeAbove)
    MissionUtils.Console.print(bridgeBelow)
  },
  printResult(bridgeArray,count) {
    if(bridgeArray.length!==0){
      MissionUtils.Console.print('게임 성공 여부: 실패')
      MissionUtils.Console.print(`총 시도한 횟수: ${count}`)
    }
    if(bridgeArray.length===0){
      MissionUtils.Console.print('게임 성공 여부: 성공')
      MissionUtils.Console.print(`총 시도한 횟수: ${count}`)
    }
    MissionUtils.Console.close()
  },
};

module.exports = OutputView;
