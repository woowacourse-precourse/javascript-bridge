const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

const Validaton = {
    validatePositiveInteger(userInput) {
        if(isNaN(Number(userInput))) {  
            throw new Error(`[ERROR] 다리의 길이는 양의 정수여야 합니다.`); 
        }
    },
    validateNumberRange(userInput) {
        if(!(2 < Number(userInput) && Number(userInput) < 21)) {  
            throw new Error(`[ERROR] 다리의 길이는 3이상 20이하입니다.`); 
        }
    },
};

module.exports = Validaton;
