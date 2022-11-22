const Message = require("./Message");
const { Console } = require("@woowacourse/mission-utils");
const readMovingErrorHandler = (move) => {
    if (!(move === `${Message.COMMAND.U}` || move === `${Message.COMMAND.D}` || move === `${Message.COMMAND.u}` || move === `${Message.COMMAND.d}`)) {
        Console.print(`${Message.ERROR_MESSAGE.MOVE_ERROR_TEXT}`);
        return 1;
        // throw new Error(`${Message.ERROR_MESSAGE.MOVE_ERROR_TEXT}`);
    }
}

const readGameCommandErrorHandler = (command) => {
    if (!(command === `${Message.COMMAND.R}` || command === `${Message.COMMAND.Q}` || command === `${Message.COMMAND.r}` || command === `${Message.COMMAND.q}`)) {
        Console.print(`${Message.ERROR_MESSAGE.COMMAND_ERROR_TEXT}`);
        return 1;
        // throw new Error(`${Message.ERROR_MESSAGE.COMMAND_ERROR_TEXT}`);
    }
}

const readBridgeSizeErrorHandler = (size) => {
    if (parseInt(size) < 3 || parseInt(size) > 20) {
        Console.print(`${Message.ERROR_MESSAGE.SIZE_ERROR_TEXT}`);
        return 1;
        // throw new Error(`${Message.ERROR_MESSAGE.SIZE_ERROR_TEXT}`);
    }
    return checkNumberHasString(size);
}   

const checkNumberHasString = (size) => {
    size = [...size];
    
    for (let i=0 ; i<size.length ; i++) {
        const element = size[i];
        if (!(element >= `${Message.COMMAND.ZERO}` && element <= `${Message.COMMAND.NINE}`)) {
            Console.print(`${Message.ERROR_MESSAGE.NUMBER_ERROR_TEXT}`);
            return 1;
        }
    }

    return 0;
}

module.exports = { readMovingErrorHandler, readGameCommandErrorHandler, readBridgeSizeErrorHandler}