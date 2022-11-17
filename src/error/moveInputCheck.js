const validate = (text) => {
    includedCheckUorD(text);
}

const includedCheckUorD = (input) => {
    if (input !== 'U' || input !== 'D') {
        throw new Error('[ERROR] U(위 칸) 또는 D(아래 칸) 중 하나의 문자를 입력해주세요.');
    }
}

module.exports = validate;