// 예외처리 메소드 모음
const exceptionHandler = {
    /**
     * @param {number}
     * @return {boolean} valid 여부를 리턴함.
     */
    validateBridgeLength(userInput) {
        const errMessage =
            '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.';
        if (!userInput) throw new Error(errMessage);
        if (userInput < 3 || userInput > 20) throw new Error(errMessage);
        return true;
    },

    /**
     * @param {string} userInput
     * @return {boolean} valid 여부를 리턴함.
     */
    validateChoice(userInput) {
        const errMessage = '[ERROR] U 또는 D를 입력해야 합니다.';
        const validInputs = 'UD';
        const isValid = validInputs.includes(userInput);
        if (!isValid) throw new Error(errMessage);
        return true;
    },

    /**
     * @param {string} userInput
     * @return {boolean} valid 여부를 리턴함.
     */
    validateRestartInput(userInput) {
        const errMessage = '[ERROR] R(재시작)또는 Q(종료)를 입력해야 합니다.';
        const validInput = 'RQ';
        const isValid = validInput.includes(userInput);
        if (!isValid) throw new Error(errMessage);
        return true;
    },
};

module.exports = exceptionHandler;
