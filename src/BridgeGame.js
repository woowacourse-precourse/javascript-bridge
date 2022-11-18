const OutputView = require("./OutputView");
const { STRUCTURE, MESSAGE } = require("./constant/message.js");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */

class BridgeGame {
    bridgeArray;
    bridgeCount;
    #gameCount;
    #upBridgeHistory;
    #downBridgeHistory;

    constructor(bridgeArray) {
        this.bridgeArray = bridgeArray;
        this.bridgeCount = 0;
        this.#gameCount = 1;
        this.#upBridgeHistory = [];
        this.#downBridgeHistory = [];
    }

    isBadMove(move) {
        console.log("BridgeGame.isBadMove----------");
        const badUp = move === "U" && this.bridgeArray[this.bridgeCount] === "D";
        const badDown = move === "D" && this.bridgeArray[this.bridgeCount] === "U";
        if (badUp || badDown) {
            console.log("true반환함");
            return true;
        }
    }

    move(move) {
        console.log("BridgeGame.move-----------");
        this.check(move);
        const rightUp = move === "U" && this.bridgeArray[this.bridgeCount] === "U";

        if (this.bridgeCount === this.bridgeArray.length - 1) {
            return OutputView.printResult();
        }

        this.success(rightUp);
    }

    success(rightUp) {
        if (rightUp) {
            this.#upBridgeHistory.push(STRUCTURE.GOOD);
            this.#downBridgeHistory.push(STRUCTURE.BLANK);
        }
        if (!rightUp) {
            this.#upBridgeHistory.push(STRUCTURE.BLANK);
            this.#downBridgeHistory.push(STRUCTURE.GOOD);
        }
        OutputView.printMap(this.#upBridgeHistory, this.#downBridgeHistory, this.bridgeArray);
        this.bridgeCount++;
    }

    fail(badDirection) {
        if (badDirection) {
            this.#upBridgeHistory.push(STRUCTURE.BAD);
            this.#downBridgeHistory.push(STRUCTURE.BLANK);
        }
        if (!badDirection) {
            this.#upBridgeHistory.push(STRUCTURE.BLANK);
            this.#downBridgeHistory.push(STRUCTURE.BAD);
        }
    }

    retry(answer) {
        if (answer === "R") {
            this.bridgeCount = 0;
            this.#upBridgeHistory = [];
            this.#downBridgeHistory = [];
            this;
            return true;
        }
    }

    finish() {
        console.log(MESSAGE.FAIL);
        console.log(MESSAGE.TRY + this.#gameCount);
    }
}
module.exports = BridgeGame;
