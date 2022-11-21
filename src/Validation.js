class Validation {
    #NAN_ERROR_MESSAGE = '[ERROR] 다리의 길이는 숫자여야 합니다.';
    #NOT_IN_RANGE_ERROR_MESSAGE = '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.';
    #MOVING_INPUT_ERROR_MESSAGE = '[ERROR] U 또는 D만 입력 가능합니다.';
    #RETRY_INPUT_ERROR_MESSAGE = '[ERROR] R 또는 Q만 입력 가능합니다.';

    checkSizeInputValidation(bridgeSize) {
        // 1. 숫자가 아닌 입력
        // 2. 3 ~ 20이 아닌 입력
    }

    checkMovingInputValidation(movingInput) {
        // U, D 아닌 입력
    }

    checkRetryInputValidation(gameCommandInput) {
        // R, Q 아닌 입력
    }
}

module.exports = Validation;
