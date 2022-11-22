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
            throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
        }
    },
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
            throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
        }
    },

}

module.exports = ValidateCheck;
