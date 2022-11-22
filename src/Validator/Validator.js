const Print = require('../Print');


class BridgeLengthInput {
    #userInput

    constructor (userInput) {
        this.#userInput = Number(userInput);
    }

    check() {
        try{
            if (this.isValidNumber() || this.isValidRange() || this.isNotInteger())
                throw new Error(Print.ErrorMessage('[ERROR] 3~20 사이의 숫자만 입력 가능합니다.'));
                return true;
        }catch {
            return false;
        }
    }

    isValidRange() {
        return this.#userInput < 3 || this.#userInput > 20;
    }

    isValidNumber() {
        return isNaN(this.#userInput);
    }
    isNotInteger() {
        return !Number.isInteger(this.#userInput);
    }
}

class DirectionChoiceInput {
    #userInput

    constructor (userInput) {
        this.#userInput = userInput;
    }

    check() {
        try{
            if (!this.isValidInput())
                throw new Error(Print.ErrorMessage('[ERROR] U 또는 D만 입력 가능합니다.'));
                return true;
        }catch {
            return false;
        }
    }
    isValidInput() {
        return this.#userInput === 'U' || this.#userInput === 'D';
    }
}

class RetryInput {
    #userInput

    constructor (userInput) {
        this.#userInput = userInput;
    }

    check() {
        try{
            if (!this.isValidInput())
                throw new Error(Print.ErrorMessage('[ERROR] Q 또는 R만 입력 가능합니다.'));
                return true;
        }catch {
            return false;
        }
    }

    isValidInput() {
        return this.#userInput === 'Q' || this.#userInput === 'R';
    }
}


module.exports = {BridgeLengthInput, DirectionChoiceInput, RetryInput};