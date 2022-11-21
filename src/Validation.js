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

    checkUserChoice(userChoice) {
        if(!this.isUserChoiceLength(userChoice)) {
            return false;
        }
        if(!this.isUserChoiceValue(userChoice)) {
            return false;
        }
        return true;
    },

    checkGameRestart(gameRestart) {
        if(!this.isGameRestartLength(gameRestart)) {
            return false;
        }
        if(!this.isGameRestartValue(gameRestart)) {
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
    },

    isUserChoiceLength(userChoice) {
        if(userChoice.length !== 1) {
            Console.print("[ERROR] 다리를 선택하는 커맨드는 한 글자여야 합니다.");
            return false;
        }
        return true;
    },

    isUserChoiceValue(userChoice) {
        if(!(userChoice === "U" || userChoice === "D")) {
            Console.print("[ERROR] 다리 선택 커맨드는 U 또는 D 여야 합니다.");
            return false;
        }
        return true;
    },

    isGameRestartLength(gameRestart) {
        if(gameRestart.length !== 1) {
            Console.print("[ERROR] 게임 재시작 및 종료 커맨드는 한 글자여야 합니다.");
            return false;
        }
        return true;
    },

    isGameRestartValue(gameRestart) {
        if(!(gameRestart === "R" || gameRestart === "Q")) {
            Console.print("[ERROR] 다리 선택 커맨드는 R 또는 Q 여야 합니다.");
            return false;
        }
        return true;
    },
}

module.exports = Validation;