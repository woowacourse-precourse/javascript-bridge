const { Console } = require("@woowacourse/mission-utils");
const { STRUCTURE, MESSAGE, KEY } = require("./constant/message.js");
const { printMap, printResult } = require("./OutputView");

class BridgeGame {
    #bridgeArray;
    #moveCount;
    #gameCount;
    #bridgeHistory;

    constructor(bridgeArray) {
        this.#bridgeArray = bridgeArray;
        this.#moveCount = 0;
        this.#gameCount = 1;
        this.#bridgeHistory = [];
    }

    move(move) {
        this.#moveCount++;
        return move === KEY.UP;
    }

    pushBridgeHistory(isKeyUp, structureStatus) {
        if (isKeyUp) {
            return this.#bridgeHistory.push([structureStatus, STRUCTURE.BLANK]);
        }
        if (!isKeyUp) {
            return this.#bridgeHistory.push([STRUCTURE.BLANK, structureStatus]);
        }
    }

    isBadMove(isKeyUp) {
        const isKeyBadUp = isKeyUp && this.#bridgeArray[this.#moveCount - 1] === KEY.DOWN;
        const isKeyBadDown = !isKeyUp && this.#bridgeArray[this.#moveCount - 1] === KEY.UP;
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
        return false;
    }

    resetBridgeSetting() {
        this.#moveCount = 0;
        this.#bridgeHistory = [];
        this.#gameCount++;
    }

    getBridgeArray() {
        return this.#bridgeArray;
    }

    getBridgeHistory() {
        return this.#bridgeHistory;
    }

    getGameCount() {
        return this.#gameCount;
    }

    makeBridgeHistoryForPrint() {
        const upBridgeHistory = this.#bridgeHistory.map((bridge) => bridge[0]).join(STRUCTURE.LINK);
        const downBridgeHistory = this.#bridgeHistory.map((bridge) => bridge[1]).join(STRUCTURE.LINK);
        return [upBridgeHistory, downBridgeHistory];
    }
}
module.exports = BridgeGame;
