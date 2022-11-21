const Exception = {
    isNotNumber(input) {
        if(isNaN(input) || input.match(/\s/g)) {
            throw new Error('[Error] 숫자 형태가 아닙니다.'); 
        }
    },

    bridgeSizeOutofIndex(input) {
        if(Number(input) < 3 || Number(input) > 20) {
            throw new Error('[Error] 다리 길이는 3이상 20이하의 값으로 입력해야 합니다.'); 
        }
    }
}

module.exports = Exception;
