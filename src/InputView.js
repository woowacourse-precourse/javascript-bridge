/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker=require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const OutputView=require('./OutputView')
const BrideGame=require('./BridgeGame')
const bridegame=new BrideGame()
const InputClass=require('./Input')

const InputView = {
  printGameStart(){
    MissionUtils.Console.print('다리 건너기 게임을 시작합니다\n')
  },
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine('다리의 길이를 입력해주세요\n', (bridgeLength)=>{
      InputClass.checkBride(bridgeLength)
      this.randomBridge(bridgeLength)
    })
  },
  randomBridge(bridgeLength) {
    const number=BridgeRandomNumberGenerator.generate
    const bridgeArray=BridgeMaker.makeBridge(bridgeLength,number)
    InputClass.randomBridge(bridgeArray)
    this.readMoving(bridgeArray)
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeArray) {
    MissionUtils.Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)\n',(userSpace)=>{
      const correctValue=InputClass.checkMovingInput(userSpace,bridgeArray)
      this.checkMoving(bridgeArray,correctValue)
    })
  },
  checkMoving(bridgeArray,correctValue){
    if(correctValue==='O'){
      OutputView.printBridgeResult()
      this.checkIsOValue(bridgeArray)
    } 
    if(correctValue==='X') {
      OutputView.printBridgeResult()
      this.readGameCommand(bridgeArray)
    }
  },
  checkIsOValue(bridgeArray){
    //다리를 맞췄을 때 bridgegame move 함수에 배열을 보내주고, 다시 U,D를 입력받음
    let shiftedBridge=bridegame.move(bridgeArray)
    if(shiftedBridge.length===0) {
      MissionUtils.Console.print('최종 게임 결과')
      OutputView.printBridgeResult()
      OutputView.printResult(shiftedBridge,InputClass.count)
    }
    else this.readMoving(shiftedBridge)
  },
  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeArray) {
    MissionUtils.Console.readLine("게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",(gameInput)=>{
      let bridge=InputClass.checkReadGameInput(gameInput,bridgeArray)
      OutputView.initializeArray()
      this.readMoving(bridge)
    })
  },
};

module.exports = InputView;
