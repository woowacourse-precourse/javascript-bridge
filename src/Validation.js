const { Console } = require("@woowacourse/mission-utils");

const Validation = {
    checkBridgeSize(size) {
        if(!this.isBridgeSizeNum(size)) {
            return false;
        }
        if(!this.isBridgeSizeValue(size)) {
            return false;
        }
        if(!this.isBridgeSizeInt(size)) {
            return false;
        }
        return true;
    },

    isBridgeSizeNum(size) {
        if(isNaN(size)) {
            Console.print("[ERROR] 다리 길이는 숫자여야 합니다.\n");
            return false;
        }
        return true;
    },

    isBridgeSizeValue(size) {
        if((Number(size) < 3) || (20 < Number(size))) {
            Console.print("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.\n");
            return false;
        }
        return true;
    },

    isBridgeSizeInt(size) {
        if((Number(size) % 1) !== 0) {
            Console.print("[ERROR] 다리 길이는 정수여야 합니다.\n");
            return false;
        }
        return true;
    }
}

module.exports = Validation;