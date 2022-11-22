const MissionUtils = require("@woowacourse/mission-utils");

const validate = (length) => {
    notNumber(length);
    lengthCheck(length);
}

const notNumber = (input) => {
    try {
        if (parseInt(input) === NaN) {
            throw new Error('[ERROR] 숫자만 입력해주세요.');
        }
    } catch (e) {
        MissionUtils.Console.print(e.message);
        return true;
    }
}

const lengthCheck = (input) => {
    try {
        if (Number(input) < 3 || Number(input) > 20) {
            throw new Error('[ERROR] 3 이상 20 이하의 숫자를 입력해주세요.');
        }
    } catch (e) {
        MissionUtils.Console.print(e.message);
        return true;
    }
}

module.exports = validate;