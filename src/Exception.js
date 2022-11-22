const { Console } = require("@woowacourse/mission-utils");

class Exception{

    checkBridgeLength(input){
        let bridgeLength = Number(input);
        try{
            if(!bridgeLength) throw new Error("[ERROR] 숫자를 입력해 주세요")
            if(bridgeLength > 20 || bridgeLength < 3) throw new Error("[ERROR] 다리의 길이는 3이상 20이하 입니다")
        }catch(e){
            Console.print(`${e.message}`)
            return false
        }
        return true
    }

    checkUpDown(input){
        try{
            if(input !== 'U' && input !== 'D') throw new Error("[ERROR] U(위 칸)와 D(아래 칸) 중 하나의 문자를 입력할 수 있습니다.")
        }catch(e){
            Console.print(`${e.message}`)
            return false
        }
        return true
    }

    checkRestartEnd(input){
        try{
            if(input !== 'Q' && input !== 'R') throw new Error("[ERROR] R(재시작)과 Q(종료) 중 하나의 문자를 입력할 수 있습니다.")
        }catch(e){
            Console.print(`${e.message}`)
            return false
        }
        return true
    }

}

module.exports = Exception;