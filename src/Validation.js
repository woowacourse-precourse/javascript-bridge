class Validation {
    #NAN_ERROR_MESSAGE = '[ERROR] 다리의 길이는 숫자여야 합니다.';
    #NOT_IN_RANGE_ERROR_MESSAGE = '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.';
    #MOVING_INPUT_ERROR_MESSAGE = '[ERROR] U 또는 D만 입력 가능합니다.';
    #RETRY_INPUT_ERROR_MESSAGE = '[ERROR] R 또는 Q만 입력 가능합니다.';

    checkSizeInputValidation(bridgeSize) {
        // 1. 숫자가 아닌 입력
        if (isNaN(bridgeSize)) 
            throw this.#NAN_ERROR_MESSAGE;
        // 2. 3 ~ 20이 아닌 입력
        if (bridgeSize < 3 || bridgeSize > 20)
            throw this.#NOT_IN_RANGE_ERROR_MESSAGE;
    }

    checkMovingInputValidation(movingInput) {
        // U, D 아닌 입력
        if (movingInput !== 'U' && movingInput !== 'D')
            throw this.#MOVING_INPUT_ERROR_MESSAGE;
    }

    checkRetryInputValidation(gameCommandInput) {
        // R, Q 아닌 입력
        if (gameCommandInput !== 'R' && gameCommandInput !== 'Q')
            throw this.#RETRY_INPUT_ERROR_MESSAGE;
    }
}

module.exports = Validation;
