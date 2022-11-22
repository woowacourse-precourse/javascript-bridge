const { STRUCTURE, KEY } = require("./constant/message.js");

class BridgeGame {
    #bridgeArray;
    #moveCount;
    #gameCount;
    #trace;

    constructor(bridgeArray) {
        this.#bridgeArray = bridgeArray;
        this.#moveCount = 0;
        this.#gameCount = 1;
        this.#trace = [];
    }

    move(move) {
        this.#moveCount++;
        return move === KEY.UP;
    }

    isBadMove(isKeyUp) {
        const currentBridgeState = this.#bridgeArray[this.#moveCount - 1];
        const isKeyBadUp = isKeyUp && currentBridgeState === KEY.DOWN;
        const isKeyBadDown = !isKeyUp && currentBridgeState === KEY.UP;

        return isKeyBadUp || isKeyBadDown;
    }

    isClear() {
        return this.#moveCount === this.#bridgeArray.length;
    }

    questionRetry(answer) {
        if (answer === KEY.RESTART) {
            this.resetBridgeSetting();

            return true;
        }
    }

    pushBridgeTrace(isKeyUp, structureState) {
        if (isKeyUp) {
            return this.#trace.push([structureState, STRUCTURE.BLANK]);
        } else {
            return this.#trace.push([STRUCTURE.BLANK, structureState]);
        }
    }

    makeBridgeTraceForPrint() {
        const upBridgeTraceArray = this.#trace.map((bridge) => bridge[0]).join(STRUCTURE.LINK);
        const downBridgeTraceArray = this.#trace.map((bridge) => bridge[1]).join(STRUCTURE.LINK);

        return [upBridgeTraceArray, downBridgeTraceArray];
    }

    resetBridgeSetting() {
        this.#moveCount = 0;
        this.#trace = [];
        this.#gameCount++;
    }

    getBridgeArray() {
        return this.#bridgeArray;
    }

    getBridgeTrace() {
        return this.#trace;
    }

    getGameCount() {
        return this.#gameCount;
    }
}
module.exports = BridgeGame;
