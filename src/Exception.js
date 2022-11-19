const Exception = {

    checkBridgeLength(input){
        let bridgeLength = Number(input);
        if(!bridgeLength) throw new Error("[ERROR] 숫자를 입력해 주세요")
        if(bridgeLength > 20 || bridgeLength < 3) throw new Error("[ERROR] 다리의 길이는 3-20입니다.")
    },

    checkUpDown(input){
        if(input !== 'U' && input !== 'D') throw new Error("[ERROR] U나 D를 입력해주세요.")
    },

    checkRestartEnd(input){
        if(input !== 'Q' && input !== 'R') throw new Error("[ERROR] 재시도: R, 종료: Q")
    },

}

module.exports = Exception;