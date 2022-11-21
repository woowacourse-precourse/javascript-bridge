const validate = (length) => {
    notNumber(length);
    lengthCheck(length);
}

const notNumber = (input) => {
    if (parseInt(input) === NaN) {
        throw new Error('[ERROR] 숫자만 입력해주세요.');
    }
}

const lengthCheck = (input) => {
    if (Number(input) < 3 || Number(input) > 20) {
        throw new Error('[ERROR] 3 이상 20 이하의 숫자를 입력해주세요.');
    }
}

module.exports = validate;