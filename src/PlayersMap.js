const leftBlock = '[';
const rightBlock = ']';

class PlayersMap {
    #upSpace;

    #downSpace;

    show(playersBridge, winBridge) {
        this.#upSpace = [];
        this.#downSpace = [];
        for (let i = 0; i < playersBridge.length; i += 1) {
            this.isU(playersBridge[i], winBridge[i]);
            this.isD(playersBridge[i], winBridge[i]);
        }
        return `${this.cover(this.#upSpace)}\n${this.cover(this.#downSpace)}`;
    }

    isU(playersBridge, winBridge) {
        if (playersBridge === 'U') {
            this.#upSpace += playersBridge === winBridge ? 'O' : 'X';
            this.#downSpace += ' ';
        }
    }

    isD(playersBridge, winBridge) {
        if (playersBridge === 'D') {
            this.#upSpace += ' ';
            this.#downSpace += playersBridge === winBridge ? 'O' : 'X';
        }
    }

    empty(space) {

    }

    cover(space) {
        return `${leftBlock}${space}${rightBlock}`;
    }

    // 사이사이 공백 넣기
    //사이사이 줄 넣기
}

module.exports = PlayersMap;
