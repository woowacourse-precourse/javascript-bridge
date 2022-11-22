const Validator = {
    isBridgeSize(size) {
        if(isNaN(size) || size<3 || size>20){
            throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
        }
    },

    isMove(move) {
        if(move!=='U' && move!=='D'){
            throw new Error("[ERROR] 이동할 칸은 U 또는 D의 문자여야 합니다..");
        }
    },

    isGameCommand(gameCommand) {
        if(gameCommand!=='R' && gameCommand!=='Q'){
            throw new Error("[ERROR] 게임 재시도 여부는 R 또는 Q의 문자여야 합니다.");
        }
    }
}

module.exports = Validator;