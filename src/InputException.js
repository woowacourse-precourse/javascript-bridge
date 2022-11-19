const MissionUtils = require("@woowacourse/mission-utils");
class Exception{

    checkBridgeLength(input){
        let bridgeLength = Number(input);
        try{
            if(!bridgeLength) throw new Error("[ERROR] 숫자를 입력해 주세요")
            if(bridgeLength > 20 || bridgeLength < 3) throw new Error("[ERROR] 다리의 길이는 3-20입니다.")
        }catch(e){
            MissionUtils.Console.print(`${e.message}`)
            return e.name
        }
    }

    checkUpDown(input){
        try{
            if(input !== 'U' && input !== 'D') throw new Error("[ERROR] U나 D를 입력해주세요.")
        }catch(e){
            MissionUtils.Console.print(`${e.message}`)
            return e.name
        }
    }

    checkRestartEnd(input){
        try{
            if(input !== 'Q' && input !== 'R') throw new Error("[ERROR] 재시도: R, 종료: Q")
        }catch(e){
            MissionUtils.Console.print(`${e.message}`)
            return e.name
        }
    }

}

module.exports = Exception;