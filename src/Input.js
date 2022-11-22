const OutputView=require('./OutputView')
const BridgeGame=require('./BridgeGame')
const bridegame=new BridgeGame()
const InputView=require('./InputView')
const STRINGS=require('./Const')


class Input{
  static count=BridgeGame.count
  static originalBridge=''

  static checkBridge(bridgeLength){
    if(bridgeLength<3 || bridgeLength>20) throw STRINGS.BRIDGE_LEN_ERROR
    if(bridgeLength.match(/[a-zA-z]/g) || bridgeLength.match(/[ㄱ-ㅎ가-힣]/g)) throw STRINGS.BRIDGE_STRING_ERROR
    if(bridgeLength.match([/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g])) throw STRINGS.BRIDGE_STRING_ERROR
    if(bridgeLength<0) throw STRINGS.BRIDGE_NEGATIVE_ERROR
  }

  static randomBridge(bridgeArray){
    this.originalBridge=JSON.parse(JSON.stringify(bridgeArray))
  }
  static checkMovingInput(userSpace,bridgeArray){
    if(userSpace!=='U'&& userSpace!=='D') throw "[ERROR] Only U,D accepted"
    let correctValue=OutputView.printMap(userSpace,bridgeArray)
    return correctValue
  }
  static checkReadGameInput(gameInput,bridgeArray){
    this.count++
    if(gameInput!=='R' && gameInput!=='Q') throw "[ERROR] Only R,Q accepted"
    if(gameInput==='R'){
      this.count=BridgeGame.retry()
      const newBridgeArray=this.originalBridge
      return newBridgeArray
    }
    if(gameInput==='Q') {
      OutputView.printBridgeResult(gameInput)
      OutputView.printResult(bridgeArray,this.count)
    }
  }
}

module.exports=Input