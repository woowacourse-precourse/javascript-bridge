const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

const Validaton = {
    validatePositiveInteger(userInput) {
        if(isNaN(Number(userInput))) {  
            throw new Error(`[ERROR] 다리의 길이는 양의 정수여야 합니다.`); 
        }
    },
};

module.exports = Validaton;
