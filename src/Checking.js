// 사용자가 잘못된 값을 입력한 경우 throw문을 사용해 예외를 발생시키고, "[ERROR]"로 시작하는 에러 메시지를 출력 후 그 부분부터 입력을 다시 받는다.
const MissionUtils = require("@woowacourse/mission-utils");

const Checking  = {
    // 다리의 길이가 숫자인가?
    bridgeNum (bridge) {
        // 소수 인 경우 ERROR 처리
        if(this.isFloat(bridge) === "ERROR") return "ERROR"
        bridge = parseInt(bridge)
        if ( Number.isInteger(bridge) === false ) {
            MissionUtils.Console.print("[ERROR] 다리의 길이는 숫자로 입력해주세요")
            return "ERROR"
        }
    },

    // 다리 길이가 소수인 경우 ERROR 처리
    isFloat(number){
        number = Number(number)
        if (number % 1 !== 0 ) {
            MissionUtils.Console.print("[ERROR] 다리의 길이는 실수형으로 입력해주세요")
            return "ERROR"
        }
    },
    // 3 이상 20 이하의 수인가?
    bridgeNumCheck(bridge) {
        if (bridge <= 2  || bridge >= 21 ) { 
            MissionUtils.Console.print("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.")
            return "ERROR"
        }
    },
    // userMove값이 올바른가?
    userMoveCheck(userMove){
        const CORRECT = ['U','D']
        if ( CORRECT.includes(userMove) === false) {
            MissionUtils.Console.print("[ERROR] 위: U , 아래 : D 값으로 입력해주세요.") 
            return "ERROR"
        }
    },
    // userChoice값이 올바른가?
    userRetryCheck(userChoice){
        const CORRECT = ['R','Q']
        if ( CORRECT.includes(userChoice) === false) { 
            MissionUtils.Console.print("[ERROR] 재시도: R, 종료: Q 값으로 입력해주세요") 
            return "ERROR"
        }
    }
}

module.exports = Checking;