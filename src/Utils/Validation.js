const { Console } = require("@woowacourse/mission-utils");
const {BRIDGE, BRIDGE_SIZE, GAME_COMMAND} = require("./Constants");
const {ERROR_MESSAGE_BRIDGE_SIZE, ERROR_MESSAGE_USERCHOICE, ERROR_MESSAGE_GAMERESTART} = require("./Message");

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
            Console.print(ERROR_MESSAGE_BRIDGE_SIZE.NUM);
            return false;
        }
        return true;
    },

    isBridgeSizeValue(size) {
        if((Number(size) < BRIDGE_SIZE.MIN) || (BRIDGE_SIZE.MAX < Number(size))) {
            Console.print(ERROR_MESSAGE_BRIDGE_SIZE.VALUE);
            return false;
        }
        return true;
    },

    isBridgeSizeInt(size) {
        if((Number(size) % 1) !== 0) {
            Console.print(ERROR_MESSAGE_BRIDGE_SIZE.INT);
            return false;
        }
        return true;
    },

    isUserChoiceLength(userChoice) {
        if(userChoice.length !== 1) {
            Console.print(ERROR_MESSAGE_USERCHOICE.LENGTH);
            return false;
        }
        return true;
    },

    isUserChoiceValue(userChoice) {
        if(!(userChoice === BRIDGE.UP || userChoice === BRIDGE.DOWN)) {
            Console.print(ERROR_MESSAGE_USERCHOICE.VALUE);
            return false;
        }
        return true;
    },

    isGameRestartLength(gameRestart) {
        if(gameRestart.length !== 1) {
            Console.print(ERROR_MESSAGE_GAMERESTART.LENGTH);
            return false;
        }
        return true;
    },

    isGameRestartValue(gameRestart) {
        if(!(gameRestart === GAME_COMMAND.RESTART || gameRestart === GAME_COMMAND.QUIT)) {
            Console.print(ERROR_MESSAGE_GAMERESTART.VALUE);
            return false;
        }
        return true;
    },
}

module.exports = Validation;