const validate = (text) => {
    includedCheckRorQ(text);
}

const includedCheckRorQ = (input) => {
    if (input !== 'R' || input !== 'Q') {
        throw new Error('[ERROR] R(재시작) 또는 Q(종료) 중 하나의 문자를 입력해주세요.');
    }
}

module.exports = validate;