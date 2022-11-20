/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker=require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const OutputView=require('./OutputView')
const BrideGame=require('./BridgeGame')
const bridegame=new BrideGame()

let count=0
const InputView = {
  printGameStart(){
    MissionUtils.Console.print('다리 건너기 게임을 시작합니다\n')
  },
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine('다리의 길이를 입력해주세요\n', (bridgeLength)=>{
      this.checkBridgeSizeInput(bridgeLength)
    })
  },
  checkBridgeSizeInput(bridgeLength){
    if(bridgeLength<3 || bridgeLength>20) throw "[ERROR] range error occured"
    if(bridgeLength.match(/[a-zA-z]/g) || bridgeLength.match(/[ㄱ-ㅎ가-힣]/g)) throw "[ERROR] The string can not be accepted"
    if(bridgeLength.match([/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g])) throw "[ERROR] The string can not be accepted"
    if(bridgeLength<0) throw "[ERROR] The Negative number can't be accepted"
    this.randomBridge(bridgeLength)
  },
  randomBridge(bridgeLength) {
    const number=BridgeRandomNumberGenerator.generate
    const bridgeArray=BridgeMaker.makeBridge(bridgeLength,number)
    this.readMoving(bridgeArray)
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeArray) {
    MissionUtils.Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)\n',(userSpace)=>{
      this.checkMovingInput(userSpace,bridgeArray)
    })
  },
  checkMovingInput(userSpace,bridgeArray){
    if(userSpace!=='U'&& userSpace!=='D') throw "[ERROR] Only U,D accepted"
    let correctValue=OutputView.printMap(userSpace,bridgeArray,count)
    if(correctValue==='O') {
      //다리를 맞췄을 때 bridgegame move 함수에 배열을 보내주고, 다시 U,D를 입력받음
      bridegame.move(bridgeArray)
      if(bridgeArray.length===0) {
        MissionUtils.Console.print('최종 게임 결과')
        OutputView.printBridgeResult()
        OutputView.printResult(bridgeArray,count)
      }
      if(bridgeArray.length!==0) {
        OutputView.printBridgeResult()
        this.readMoving(bridgeArray)
      }
    }
    if(correctValue==='X') {
      OutputView.printBridgeResult()
      this.readGameCommand(bridgeArray)
    }
  },
  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeArray) {
    MissionUtils.Console.readLine("게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",(gameInput)=>{
      this.checkReadGameInput(gameInput,bridgeArray)
      
    })
  },
  checkReadGameInput(gameInput,bridgeArray){
    count++
    if(gameInput!=='R' && gameInput!=='Q') throw "[ERROR] Only R,Q accepted"
    if(gameInput==='R'){
      bridegame.retry(gameInput)
      InputView.readMoving(bridgeArray)
    }
    if(gameInput==='Q') {
      OutputView.printBridgeResult(gameInput)
      OutputView.printResult(bridgeArray,count)
    }
  }
};

module.exports = InputView;
