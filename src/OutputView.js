/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */

const MissionUtils = require("@woowacourse/mission-utils");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator")

const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */


  printMap(bridge_u , bridge_d) {  

    // bridge_u print
    let BRIDGE = []
    let BRIDGE_RESULT_U = this.printU(bridge_u)
    let BRIDGE_RESULT_D = this.printU(bridge_d)
    MissionUtils.Console.print(`${BRIDGE_RESULT_U}`)

    // bridge_d print
    MissionUtils.Console.print(`${BRIDGE_RESULT_D}`)

    BRIDGE.push(BRIDGE_RESULT_U , BRIDGE_RESULT_D)
    return BRIDGE

  },

  printU(status){
    let BRIDGE_TOTAL = '['
    let BRIDGE = ''
    let CNT = 0
    BRIDGE_TOTAL += this.stringBridge(status,BRIDGE,CNT)
    BRIDGE_TOTAL += ']'
    return BRIDGE_TOTAL
  },

  stringBridge(status,BRIDGE,CNT){
    for (let i of status ) {
      CNT += 1
      if (status.length === 1) return ` ${i} `
      if ( CNT === status.length ) { 
        BRIDGE += ` ${i} `
        continue
      } 
      BRIDGE += ` ${i} |`
    }
    return BRIDGE
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(RESULT , bridge , try_time) {
    if (RESULT === 'SUCCESS') { this.printSuccess(bridge,try_time)}
  },

  printSuccess(bridge,try_time){
    MissionUtils.Console.print("최종 게임 결과")
    MissionUtils.Console.print(`${bridge[0]}`)
    MissionUtils.Console.print(`${bridge[1]}`)
    MissionUtils.Console.print("게임 성공 여부: 성공")
    MissionUtils.Console.print(`총 시도한 횟수: ${try_time}`)

  },

  printStart() {
    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.")
    MissionUtils.Console.print("다리의 길이를 입력해주세요.")
  },
  
  printMove(){
    MissionUtils.Console.print("이동할 칸을 선택해주세요. (위: U, 아래: D)")
  },

  printBridge(){
    MissionUtils.Console.print("다리 결과 출력")
  },
  
  printRetry(){
    MissionUtils.Console.print("게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)")
  }
};

module.exports = OutputView;
