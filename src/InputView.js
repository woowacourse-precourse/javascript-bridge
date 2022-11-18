/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker=require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const OutputView=require('./OutputView')

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
    // return bridgeLength
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
    OutputView.printMap(bridgeArray)
  },
  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    MissionUtils.Console.readLine("게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",(gameInput)=>{
      this.checkReadGameInput(gameInput)
    })
  },
  checkReadGameInput(gameInput){
    if(gameInput!=='R' || gameInput!=='Q') throw "[ERROR] Only R,Q accepted"
    return gameInput
  }
};

module.exports = InputView;
