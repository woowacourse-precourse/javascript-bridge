const ERROR = require('./Error');

const validation = {
    validateRange(range, number){
        if(Number(number) < range[0] || Number(number) > range[1]){
            throw new Error(ERROR.numberNotInRange);
        }
    },
    
    validateNumber(charicter){
        if(!/d/.test(charicter)){
            throw new Error(ERROR.notNumber);
        }
    },
    
    validateCommand(commands, error, command){
        if(!commands.include(command)){
            throw new Error(error)
        }
    }
    
}

module.exports = validation;

