
const ErrorHandler = {
    isValid(input) {
        return !isNaN(input);
    },

    isBridgeSizeCorrect(input) {
        const regex = /^[0-9]+$/;
        if (input < 3 | input > 20) {
            throw new Error("[Error] 다리의 크기는 3 ~ 20 사이의 숫자만 가능합니다.");
        }
        if (!regex.test(input)) {
            throw new Error("[Error] 숫자만 입력 가능합니다.");
        }
    },

    isRetryCorrect(input) {
        if (input != "R" | input != "Q") {
            throw new Error("[Error] 재시작시 R 혹은 Q를 입력해주세요.");
        }
    },

    isStringCorrect(input) {
        if (input != "U" | input != "D") {
            throw new Error("[Error] 이동시 U 혹은 D를 입력해주세요.");
        }
    }
}

module.exports = ErrorHandler;