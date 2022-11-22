const MissionUtils = require('@woowacourse/mission-utils');
const Consolee = MissionUtils.Console;

const ValidateCheck = {
    /**
     * 다리의 길이 예외처리 검사
     */
    bridgeSizeValidate(size){
        let check = /^[0-9]+$/;
        if(!check.test(size)){
            Consolee.print("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
            throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
        }
        if(Number(size) < 3 && Number(size) > 20){
            Consolee.print("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
            throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
        }
    },
    /**
     * 사용자 이동 예외처리 검사
     */
     movingValidate(move){
        if(move !== "U" && move !== "D"){
            Consolee.print("[ERROR] 이동은 U, D로만 입력해 주세요.");
            throw new Error("[ERROR] 이동은 U, D로만 입력해 주세요.");
        }
    },
    /**
     * 종료, 재시작 예외처리 검사
     */
     gameCommandValidate(game){
        if(game !== "R" && game !== "Q"){
            Consolee.print("[ERROR] 종료/재시작은 R, Q로만 입력해 주세요.");
            throw new Error("[ERROR] 종료/재시작은 R, Q로만 입력해 주세요.");
        }
    },

}

module.exports = ValidateCheck;
