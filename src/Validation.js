const { ERROR_MESSAGE } = require("./constants/messages");

const Validation = {
    bridgeInput : (input) => {
        input = Number(input);
        if (isNaN(input)) {
            throw new Error(ERROR_MESSAGE.BRIDGE_ERROR);
        } else if (input < 3 || input > 20) {
            throw new Error(ERROR_MESSAGE.BRIDGE_ERROR);
        }
    },

    moveInput : (input) => {
        if (!(input === "U" || input === "D")) {
            throw new Error(ERROR_MESSAGE.MOVE_ERROR);
        }
    },

    restartInput : (input) => {
        if (!(input === "R" || input === "Q")) {
            throw new Error(ERROR_MESSAGE.RESTART_ERROR);
        }
    },
};

module.exports = { Validation };