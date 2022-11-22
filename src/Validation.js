const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const Io = require("./Io");

const Validaton = {
        validatePositiveInteger(userInput) {
            try{
                if(isNaN(Number(userInput))) {  
                    throw (`[ERROR] 다리의 길이는 양의 정수여야 합니다.`); 
                }
            }
            catch(e){
                Io.output(e);
                return true;
            }
        },
        validateNumberRange(userInput) {
            try{
                if(!(2 < Number(userInput) && Number(userInput) < 21)) {  
                    throw (`[ERROR] 다리의 길이는 3이상 20이하입니다.`); 
                }
            }
            catch(e){
                Io.output(e);
                return true;
            }
        },
        validateUserChoice(userInput){
            try{
                if(!(userInput === 'U' || userInput === 'D')) {
                    throw (`[ERROR] 이동할 칸은 U 또는 D만 선택 가능합니다.`);
                }
            }
        },
        validateUserRetryChoice(userInput){
            try{
                if(!(userInput === 'R' || userInput === 'Q')) {
                    throw (`[ERROR] 재선택은 R 또는 Q만 선택 가능합니다.`);
                }
            }
            catch(e){
                Io.output(e);
                return true;
            }
        }
};

module.exports = Validaton;
