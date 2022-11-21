const Vaildation =  {
    isNumber(input) {
        if (isNaN(money)) {
            throw new Error(`[ERROR] 입력값 ${input}은 숫자가 아닙니다.`);
        }
    },
    inRange(num, min, max) {
        if (num < min || num > max) {
            throw new Error(`[ERROR] 입력값 ${num}은 ${min}과 ${max} 사이의 값이 아닙니다.`);
        }
    }
}

module.exports = Vaildation;