const { ERROR, OPTION, KEY } = require("./constant/message.js");

class Validation {
    static checkSizeInput(size) {
        // console.log("Validation.checkSizeInput--------------------");
        this.checkNumber(size);
        this.checkSizeRange(size);
    }
    static checkNumber(number) {
        // console.log("Validation.checkNumber--------------------");
        const validNumber = !/^\d+$/g.test(number);
        if (Number(validNumber)) {
            throw new Error(ERROR.BRIDGE_INVALID_NUMBER);
        }
    }
    static checkSizeRange(size) {
        // console.log("Validation.checkSizeRange-------------------");
        const validRange = size < OPTION.MINIMUM_LENGTH || size > OPTION.MAXIMUM_LENGTH;
        if (validRange) {
            throw new Error(ERROR.BRIDGE_OVER_RANGE);
        }
    }

    static checkMoveInput(move) {
        // console.log("Validation.checkMoveInput-------------------");
        const up = move === KEY.UP;
        const down = move === KEY.DOWN;
        if (up || down) {
            return true;
        }
        throw new Error(ERROR.MOVE);
    }

    static checkRestartInput(answer) {
        // console.log("Validation.checkRestartInput-------------------");
        const restart = answer === KEY.RESTART;
        const quit = answer === KEY.QUIT;
        if (restart || quit) {
            return true;
        }
        throw new Error(ERROR.RESTART);
    }
}

module.exports = Validation;
