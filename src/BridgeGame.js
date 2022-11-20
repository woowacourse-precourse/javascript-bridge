const { Console } = require("@woowacourse/mission-utils");
const OutputView = require("./OutputView");
const { STRUCTURE, MESSAGE, KEY } = require("./constant/message.js");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */

class BridgeGame {
    #bridgeArray;
    #bridgeCount;
    #gameCount;
    #upBridgeHistory;
    #downBridgeHistory;

    constructor(bridgeArray) {
        this.#bridgeArray = bridgeArray;
        this.#bridgeCount = 0;
        this.#gameCount = 1;
        this.#upBridgeHistory = [];
        this.#downBridgeHistory = [];
    }

    isBadMove(move) {
        // console.log("BridgeGame.isBadMove----------");
        // console.log(this.#bridgeArray);
        const badUp = move === KEY.UP && this.#bridgeArray[this.#bridgeCount] === KEY.DOWN;
        const badDown = move === KEY.DOWN && this.#bridgeArray[this.#bridgeCount] === KEY.UP;
        if (badUp || badDown) {
            return true;
        }
    }

    getBridgeArray() {
        return this.#bridgeArray;
    }
    getBridgeCount() {
        return this.#bridgeCount;
    }

    showFail(move) {
        // console.log("BridgeGame.showFail--------------");
        if (move === KEY.UP) {
            this.#upBridgeHistory.push(STRUCTURE.BAD);
            this.#downBridgeHistory.push(STRUCTURE.BLANK);
        }
        if (move === KEY.DOWN) {
            this.#upBridgeHistory.push(STRUCTURE.BLANK);
            this.#downBridgeHistory.push(STRUCTURE.BAD);
        }
        OutputView.printMap(this.#upBridgeHistory, this.#downBridgeHistory);
    }

    move(move) {
        // console.log("BridgeGame.move-----------");
        const up = move === KEY.UP && this.#bridgeArray[this.#bridgeCount] === KEY.UP;
        this.goodMove(up);
    }

    isSuccess(move) {
        // console.log("BridgeGame.isSuccess---------------------");
        const up = move === KEY.UP && this.#bridgeArray[this.#bridgeCount] === KEY.UP;
        if (this.#bridgeCount === this.#bridgeArray.length - 1) {
            this.addGoodHistory(up);
            return true;
        }
    }

    addGoodHistory(up) {
        if (up) {
            this.#upBridgeHistory.push(STRUCTURE.GOOD);
            this.#downBridgeHistory.push(STRUCTURE.BLANK);
        }
        if (!up) {
            this.#upBridgeHistory.push(STRUCTURE.BLANK);
            this.#downBridgeHistory.push(STRUCTURE.GOOD);
        }
    }

    goodMove(up) {
        this.addGoodHistory(up);
        this.#bridgeCount++;
        OutputView.printMap(this.#upBridgeHistory, this.#downBridgeHistory, this.#bridgeArray);
    }

    retry(answer) {
        if (answer === KEY.RESTART) {
            this.resetBridgeSetting();
            return true;
        }
    }
    resetBridgeSetting() {
        this.#bridgeCount = 0;
        this.#upBridgeHistory = [];
        this.#downBridgeHistory = [];
        this.#gameCount++;
    }

    showSuccess() {
        Console.print(MESSAGE.FINISH);
        OutputView.printMap(this.#upBridgeHistory, this.#downBridgeHistory);
        Console.print(MESSAGE.SUCCESS);
        Console.print(MESSAGE.TRY + this.#gameCount);
        Console.close();
    }

    showFinish() {
        Console.print(MESSAGE.FINISH);
        OutputView.printMap(this.#upBridgeHistory, this.#downBridgeHistory);
        Console.print(MESSAGE.FAIL);
        Console.print(MESSAGE.TRY + this.#gameCount);
        Console.close();
    }
}
module.exports = BridgeGame;
