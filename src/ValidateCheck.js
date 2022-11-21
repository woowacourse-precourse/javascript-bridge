
const ValidateCheck = {
    /**
     * 다리의 길이 예외처리 검사
     */
    bridgeSizeValidate(size){
        if(size < 3 && size > 20){
            throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
        }
    },
}

module.exports = ValidateCheck;
