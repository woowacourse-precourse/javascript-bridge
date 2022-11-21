const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;

const validateBridge = (bridgeInput) => {
    try {
        if (Number.isNaN(bridgeInput)) throw new Error("[ERROR] 다리길이는 숫자여야 합니다.");
        if (!(3 <= bridgeInput && bridgeInput <= 20)) throw new Error("[ERROR] 다리길이는 3에서 20사이의 숫자여야 합니다.");
    } catch (err) {
        Console.print(err.message);
        return true;
    }
}

const validateMove = (move) => {
    try {
        if (!(move === "U" || move === "D")) throw new Error("[ERROR] 이동할 칸을 잘못 입력하셨습니다.");
    } catch (err) {
        Console.print(err.message);
        return true;
    }
}

const validateStart = (start) => {
    try {
        if (!(start === "R" || start === "Q")) throw new Error("[ERROR] 다시시도 여부를 잘못 입력하셨습니다.");
    } catch (err) {
        Console.print(err.message);
        return true;
    }
}

module.exports = {validateBridge, validateMove, validateStart};