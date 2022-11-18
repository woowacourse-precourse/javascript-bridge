const OutputView = require("./OutputView");
const { STRUCTURE } = require("./constant/message.js");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */

class BridgeGame {
    bridgeArray;
    bridgeCount;
    #upBridgeHistory;
    #downBridgeHistory;

    constructor(bridgeArray) {
        this.bridgeArray = bridgeArray;
        this.bridgeCount = 0;
        this.#upBridgeHistory = [];
        this.#downBridgeHistory = [];
    }

    // check(move) {
    //     if (move === "U" && this.bridgeArray[this.bridgeCount] === "D") return this.retry();
    //     if (move === "D" && this.bridgeArray[this.bridgeCount] === "U") return this.retry();
    // }

    move(move) {
        console.log("BridgeGame.move-----------");
        const up = move === "U" && this.bridgeArray[this.bridgeCount] === "U";

        if (this.bridgeCount === this.bridgeArray.length - 1) {
            return OutputView.printResult();
        }

        this.success(up);
    }

    success(up) {
        if (up) {
            this.#upBridgeHistory.push(STRUCTURE.GOOD);
            this.#downBridgeHistory.push(STRUCTURE.BLANK);
        }
        if (!up) {
            this.#upBridgeHistory.push(STRUCTURE.BLANK);
            this.#downBridgeHistory.push(STRUCTURE.GOOD);
        }
        OutputView.printMap(this.#upBridgeHistory, this.#downBridgeHistory, this.bridgeArray);
        this.bridgeCount++;
    }

    retry() {
        this.bridgeCount = 0;
        this.#upBridgeHistory = [];
        this.#downBridgeHistory = [];
    }
}
module.exports = BridgeGame;
