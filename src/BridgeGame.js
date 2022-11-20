const { Console } = require("@woowacourse/mission-utils");
const { STRUCTURE, MESSAGE, KEY } = require("./constant/message.js");
const { printMap } = require("./OutputView");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */

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
            this.#bridgeHistory.push([STRUCTURE.BAD, STRUCTURE.BLANK]);
        }
        if (move === KEY.DOWN) {
            this.#bridgeHistory.push([STRUCTURE.BLANK, STRUCTURE.BAD]);
        }
        printMap(this.#bridgeHistory);
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
        printMap(this.#bridgeHistory, this.#bridgeArray);
    }
    addGoodMoveHistory(isUp) {
        if (isUp) {
            this.#bridgeHistory.push([STRUCTURE.GOOD, STRUCTURE.BLANK]);
        }
        if (!isUp) {
            this.#bridgeHistory.push([STRUCTURE.BLANK, STRUCTURE.GOOD]);
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
        this.#bridgeHistory = [];
        this.#gameCount++;
    }

    showResult(result) {
        Console.print(MESSAGE.FINISH);
        printMap(this.#bridgeHistory);
        Console.print(result);
        Console.print(MESSAGE.TRY + this.#gameCount);
        Console.close();
    }
}
module.exports = BridgeGame;
