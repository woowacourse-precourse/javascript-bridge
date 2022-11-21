const Message = require("./Message");
const { Console } = require("@woowacourse/mission-utils");
const readMovingErrorHandler = (move) => {
    if (!(move === "U" || move === "D" || move === 'u' || move === 'd')) {
        Console.print(`${Message.ERROR_MESSAGE.MOVE_ERROR_TEXT}`);
        return 1;
        // throw new Error(`${Message.ERROR_MESSAGE.MOVE_ERROR_TEXT}`);
    }
}

const readGameCommandErrorHandler = (command) => {
    if (!(command === "R" || command === "Q" || command === 'r' || command === 'q')) {
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
        if (!(element >= '0' && element <= '9')) {
            Console.print(`${Message.ERROR_MESSAGE.NUMBER_ERROR_TEXT}`);
            return 1;
        }
    }

    return 0;
}

module.exports = { readMovingErrorHandler, readGameCommandErrorHandler, readBridgeSizeErrorHandler}