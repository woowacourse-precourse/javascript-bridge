const outputView=require('./OutputView')

class Output{
  checkMovingInput(userSpace,bridgeArray){
    if(userSpace!=='U'&& userSpace!=='D') throw "[ERROR] Only U,D accepted"
    let correctValue=OutputView.printMap(userSpace,bridgeArray,count)
    OutputView.printBridgeResult()
    if(correctValue==='O') this.checkIsOValue(bridgeArray,count)
    if(correctValue==='X') this.readGameCommand(bridgeArray)
  }
}

module.exports=Output