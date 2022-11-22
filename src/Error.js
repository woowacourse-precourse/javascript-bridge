const MissionUtils = require("@woowacourse/mission-utils");

const { isUpDown, checkNum, checkNumRange, reStartCheck } = require("./validate/validate");

function validateisUpDown(userInput) {
    try {
        if(!isUpDown(userInput)) throw new Error('[ERROR] U 또는 D를 입력해야 합니다.')
    } catch(error) {
        MissionUtils.Console.print(error.message)
        return true
    }
}

function validateBridgeSize(userInput) {
    try {
        if(checkNum(userInput)) throw new Error('[ERROR] 숫자를 입력해야 합니다.')
        if(!checkNumRange(userInput)) throw new Error('[ERROR] 3에서 20사이의 숫자를 입력해야 합니다.')
    } catch(error) {
        MissionUtils.Console.print(error.message)
        return true
    }
}

function validateReStart(userInput) {
    try {
        if(!reStartCheck(userInput)) throw new Error('[ERROR] R또는 Q를 입력해야 합니다.')
    } catch(error) {
        MissionUtils.Console.print(error.message)
        return true
    }
}


module.exports = { validateisUpDown, validateBridgeSize, validateReStart };
