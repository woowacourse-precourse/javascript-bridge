const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

const Validaton = {
    validatePositiveInteger(userInput) {
        console.log(isNaN(Number(userInput)));
        if(isNaN(Number(userInput))) {  
            throw new Error(`[ERROR] 다리의 길이는 양의 정수여야 합니다.`); 
        }
    },
    validateNumberRange(userInput) {
        if(!(2 < Number(userInput) && Number(userInput) < 21)) {  
            throw new Error(`[ERROR] 다리의 길이는 3이상 20이하입니다.`); 
        }
    },
    validateUserChoice(userInput){
        if(!(userInput === 'U' || userInput === 'D')){
            throw new Error(`[ERROR] 이동할 칸은 U 또는 D만 선택 가능합니다.`);
        }
    },
    validateUserRetryChoice(userInput){
        if(!(userInput === 'R' || userInput === 'Q')){
            throw new Error(`[ERROR] 재선택은 R 또는 Q만 선택 가능합니다.`);
        }
    }
};

module.exports = Validaton;
