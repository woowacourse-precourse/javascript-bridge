const { Console } = require("@woowacourse/mission-utils");
const {
    ERROR_MESSAGES,
} = require("./constants");

class InputCheck {
    inputLengthCheck(input) {
        if (isNaN(input) || input > 20 || input < 3) {
            Console.print(ERROR_MESSAGES.LENGTH_ERROR);
        }
    }

    inputSquareCheck(input) {
        if (input != "D" && input != "U") {
            Console.print(ERROR_MESSAGES.SQUARE_ERROR);
        }
    }

    inputRetryCheck(input) {
        if (input != "R" && input != "Q") {
            Console.print(ERROR_MESSAGES.RETRY_ERROR);
        }
    }
}

module.exports = InputCheck;