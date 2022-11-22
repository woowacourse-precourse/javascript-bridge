const { ERROR } = require('./constants/messages');
const {SETTING} =require('./constants/setting')
const { Console } = require('@woowacourse/mission-utils')


class Validation{

    static validationForBridgeLength(input){
        if(!Number.isInteger(Number(input))){
            Console.print(ERROR.NUMBER);
            Console.close();
        }if(!(Number(input)<=SETTING.MAX_NUMBER && Number(input)>=SETTING.MIN_NUMBER)){
            Console.print(ERROR.BRIDGE_LENGTH_BOUNDARY);
            Console.close();
        }if(input.length===0){
            Console.print(ERROR.EMPTY);
            Console.close();
        }
    }


    static validationForNextMove(input){
        if(input.length===0){
            Console.print(ERROR.EMPTY);
            Console.close();
        }
        if(!(input===SETTING.GO_UP || input===SETTING.GO_DOWN)){
            Console.print(ERROR.NEXT_MOVE);
            Console.close();
        }

    }

    static validationForRetry(input){
        if(input.length===0){
            Console.print(ERROR.EMPTY);
            Console.close();
        }
        if(!(input===SETTING.RETRY_COMMAND || input===SETTING.QUIT_COMMAND)){
            Console.print(ERROR.RETRY);
            Console.close();
        }
    }
}

module.exports=Validation;