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
        const isUp = move === KEY.UP && this.#bridgeArray[this.#bridgeCount] === KEY.UP;
        this.goodMove(isUp);
    }

    isSuccess(move) {
        // console.log("BridgeGame.isSuccess---------------------");
        const isUp = move === KEY.UP && this.#bridgeArray[this.#bridgeCount] === KEY.UP;
        if (this.#bridgeCount === this.#bridgeArray.length - 1) {
            this.addGoodMoveHistory(isUp);
            return true;
        }
    }

    goodMove(isUp) {
        this.addGoodMoveHistory(isUp);
        this.#bridgeCount++;
        OutputView.printMap(this.#upBridgeHistory, this.#downBridgeHistory, this.#bridgeArray);
    }
    addGoodMoveHistory(isUp) {
        if (isUp) {
            this.#upBridgeHistory.push(STRUCTURE.GOOD);
            this.#downBridgeHistory.push(STRUCTURE.BLANK);
        }
        if (!isUp) {
            this.#upBridgeHistory.push(STRUCTURE.BLANK);
            this.#downBridgeHistory.push(STRUCTURE.GOOD);
        }
    }

    questionRetry(answer) {
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

    showResult(result) {
        Console.print(MESSAGE.FINISH);
        OutputView.printMap(this.#upBridgeHistory, this.#downBridgeHistory);
        Console.print(result);
        Console.print(MESSAGE.TRY + this.#gameCount);
        Console.close();
    }
}
module.exports = BridgeGame;
