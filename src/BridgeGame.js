const { Console } = require("@woowacourse/mission-utils");
const { STRUCTURE, MESSAGE, KEY } = require("./constant/message.js");
const { printMap, printResult } = require("./OutputView");

class BridgeGame {
    #bridgeArray;
    #bridgeCount;
    #gameCount;
    #bridgeHistory;

    constructor(bridgeArray) {
        this.#bridgeArray = bridgeArray;
        this.#bridgeCount = 0;
        this.#gameCount = 1;
        this.#bridgeHistory = [];
    }

    move(move) {
        const isKeyUp = move === KEY.UP && this.#bridgeArray[this.#bridgeCount] === KEY.UP;
        this.setGoodMove(isKeyUp);
    }

    setGoodMove(isKeyUp) {
        this.#bridgeCount++;
        this.pushBridgeHistory(isKeyUp, STRUCTURE.GOOD);
        printMap(this.#bridgeHistory);
    }

    pushBridgeHistory(isUpKey, structureStatus) {
        if (isUpKey) {
            this.#bridgeHistory.push([structureStatus, STRUCTURE.BLANK]);
        }
        if (!isUpKey) {
            this.#bridgeHistory.push([STRUCTURE.BLANK, structureStatus]);
        }
    }

    isBadMove(move) {
        const isBadKeyUp = move === KEY.UP && this.#bridgeArray[this.#bridgeCount] === KEY.DOWN;
        const isBadKeyDown = move === KEY.DOWN && this.#bridgeArray[this.#bridgeCount] === KEY.UP;
        return isBadKeyUp || isBadKeyDown === true;
    }

    isSuccess(move) {
        const isKeyUp = move === KEY.UP && this.#bridgeArray[this.#bridgeCount] === KEY.UP;
        if (this.#bridgeCount === this.#bridgeArray.length - 1) {
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

    showFailBridge(move) {
        const isKeyUp = move === KEY.UP;
        this.pushBridgeHistory(isKeyUp, STRUCTURE.BAD);
        printMap(this.#bridgeHistory);
    }

    showResult(result) {
        printResult();
        printMap(this.#bridgeHistory);
        Console.print(result);
        Console.print(MESSAGE.TRY + this.#gameCount);
        Console.close();
    }

    resetBridgeSetting() {
        this.#bridgeCount = 0;
        this.#bridgeHistory = [];
        this.#gameCount++;
    }
}
module.exports = BridgeGame;
