/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const MissionUtils = require("@woowacourse/mission-utils");

const InputView = {
  printGameStart(){
    MissionUtils.Console.print('다리 건너기 게임을 시작합니다\n')
  },
  /**
   * 다리의 길이를 입력받는다.
   */

  readBridgeSize() {
    MissionUtils.Console.readLine('다리의 길이를 입력해주세요\n',(bridgeLength)=>{
      this.checkBridgeSizeInput(bridgeLength)
    })
  },

  checkBridgeSizeInput(bridgeLength){
    if(bridgeLength<3 || bridgeLength>20) throw "[ERROR] range error occured"
    if(bridgeLength.match(/[a-zA-z]/g)|| bridgeLength.match([/ㄱ-ㅎ|ㅏ-ㅣ|가-힣/g])) throw "[ERROR] The string can not be accepted"
    if(bridgeLength.match([/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g])) throw "[ERROR] The string can not be accepted"
    if(bridgeLength<0) throw "[ERROR] The Negative number can't be accepted"
    return bridgeLength
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    MissionUtils.Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)\n',(userSpace)=>{
      this.checkMovingInput(userSpace)
    })
  },
  checkMovingInput(userSpace){
    if(userSpace!=='U'||userSpace!=='D') throw "[ERROR] Only U,D accepted"
    return checkMovingInput
  },
  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
