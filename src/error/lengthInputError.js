const validate = (length) => {
    notNumber(length);
    lengthCheck(length);
}

const notNumber = (input) => {
    const inputRegex = /^\d+$/g;
    if (!input.match(inputRegex)) {
        throw new Error('[ERROR] 숫자만 입력해주세요.');
    }
}

const lengthCheck = (input) => {
    if (Number(input) < 3 || Number(input) > 20) {
        throw new Error('[ERROR] 3 이상 20 이하의 ㅅ수자를 입력해주세요.');
    }
}

module.exports = validate;