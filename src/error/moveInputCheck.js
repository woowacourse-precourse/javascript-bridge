const MissionUtils = require("@woowacourse/mission-utils");

const validate = (text) => {
    includedCheckUorD(text);
}

const includedCheckUorD = (input) => {
    try {
        if (input !== 'U' && input !== 'D') {
            throw new Error('[ERROR] U(위 칸) 또는 D(아래 칸) 중 하나의 문자를 입력해주세요.');
        }
    } catch (e) {
        MissionUtils.Console.print(e);
        return false;
    }
}

module.exports = validate;