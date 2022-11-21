const inputView=require('./InputView')
const bridgeMaker=require('./BridgeMaker')
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const OutputView=require('./OutputView')
const BridgeGame=require('./BridgeGame')
const bridegame=new BridgeGame()


// let count=0

class Input{
  static count=0
  static originalBridge=''

  static checkBride(bridgeLength){
    if(bridgeLength<3 || bridgeLength>20) throw "[ERROR] range error occured"
    if(bridgeLength.match(/[a-zA-z]/g) || bridgeLength.match(/[ㄱ-ㅎ가-힣]/g)) throw "[ERROR] The string can not be accepted"
    if(bridgeLength.match([/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g])) throw "[ERROR] The string can not be accepted"
    if(bridgeLength<0) throw "[ERROR] The Negative number can't be accepted"
  }

  static randomBridge(bridgeArray){
    console.log('input class에 저장')
    this.originalBridge=JSON.parse(JSON.stringify(bridgeArray))
    bridegame.retry(this.originalBridge)
    console.log(this.originalBridge);
  }
  static checkMovingInput(userSpace,bridgeArray){
    if(userSpace!=='U'&& userSpace!=='D') throw "[ERROR] Only U,D accepted"
    let correctValue=OutputView.printMap(userSpace,bridgeArray,this.count)
    return correctValue
  }
  static checkReadGameInput(gameInput,bridgeArray){
    this.count++
    if(gameInput!=='R' && gameInput!=='Q') throw "[ERROR] Only R,Q accepted"
    if(gameInput==='R'){
      const newBridgeArray=this.originalBridge
      console.log(newBridgeArray);
      return newBridgeArray
    }
    if(gameInput==='Q') {
      OutputView.printBridgeResult(gameInput)
      OutputView.printResult(bridgeArray,this.count)
    }
  }
}

module.exports=Input