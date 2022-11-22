const MissionUtils = require("@woowacourse/mission-utils");

const validateRangeOfNumber = (number) => {
    if (number < 3 && number > 20) {
        throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
    }
};

const validateReadMoving = (command) => {
    if (command !== "U" && command !== "D") {
        throw new Error("[ERROR] 방향키는 U와 D만 사용 가능합니다.");
    }
}

module.exports = {
    validateRangeOfNumber
};