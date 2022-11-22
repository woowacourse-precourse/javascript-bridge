const { DIRECTION, BRIDGE, JOINER } = require("../util/Constant");

class BridgeResult {
    #upperResult;
    #downerResult;

    constructor() {
        this.#upperResult = [];
        this.#downerResult = [];
    }

    initResult() {
        this.#upperResult.length = 0;
        this.#downerResult.length = 0;
    }

    getUpper() {
        return this.#upperResult;
    }

    getDowner() {
        return this.#downerResult;
    }

    addValue(upperValue, downerValue) {
        this.getUpper().push(upperValue);
        this.getDowner().push(downerValue);
    }

    pushResult(dir, success) {
        if (success) {
            if (dir === DIRECTION.UP) this.addValue(BRIDGE.CAN_MOVE, BRIDGE.BLANK);
            if (dir === DIRECTION.DOWN) this.addValue(BRIDGE.BLANK, BRIDGE.CAN_MOVE);
        }
        else {
            if (dir === DIRECTION.UP) this.addValue(BRIDGE.CANNOT_MOVE, BRIDGE.BLANK);
            else this.addValue(BRIDGE.BLANK, BRIDGE.CANNOT_MOVE);
        }
    }

    resultToString(array) {
        return JOINER.START + array.join(JOINER.SEPARATOR) + JOINER.END;
    }

    getResult() {
        const upperString = this.resultToString(this.#upperResult);
        const downerString = this.resultToString(this.#downerResult);

        return { upperString, downerString };
    }

}

module.exports = BridgeResult;