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
        const isKeyUp = move === KEY.UP && this.#bridgeArray[this.#moveCount] === KEY.UP;
        this.#moveCount++;
        this.pushBridgeHistory(isKeyUp, STRUCTURE.GOOD);
        printMap(this);
    }

    pushBridgeHistory(isKeyUp, structureStatus) {
        if (isKeyUp) {
            this.#bridgeHistory.push([structureStatus, STRUCTURE.BLANK]);
        }
        if (!isKeyUp) {
            this.#bridgeHistory.push([STRUCTURE.BLANK, structureStatus]);
        }
    }

    isBadMove(move) {
        const isKeyBadUp = move === KEY.UP && this.#bridgeArray[this.#moveCount] === KEY.DOWN;
        const isKeyBadDown = move === KEY.DOWN && this.#bridgeArray[this.#moveCount] === KEY.UP;
        if (isKeyBadUp || isKeyBadDown) {
            this.pushBridgeHistory(isKeyBadUp, STRUCTURE.BAD);
            printMap(this);
            return true;
        }
    }

    isSuccess(move) {
        const isKeyUp = move === KEY.UP && this.#bridgeArray[this.#moveCount] === KEY.UP;
        if (this.#moveCount === this.#bridgeArray.length - 1) {
            this.pushBridgeHistory(isKeyUp, STRUCTURE.GOOD);
            return true;
        }
    }

    questionRetry(answer) {
        if (answer === KEY.RESTART) {
            this.resetBridgeSetting();
            return true;
        }
    }

    resetBridgeSetting() {
        this.#moveCount = 0;
        this.#bridgeHistory = [];
        this.#gameCount++;
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
