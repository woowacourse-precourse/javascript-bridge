const leftBlock = '[';
const rightBlock = ']';
const emptySpace = ' ';

class PlayersMap {
    #upSpace;

    #downSpace;

    show(playersBridge, winBridge) {
        this.#upSpace = [];
        this.#downSpace = [];
        for (let i = 0; i < playersBridge.length; i += 1) {
            this.make(playersBridge[i], winBridge[i]);
        }

        this.#upSpace = this.cover(this.divideLine(this.#upSpace));
        this.#downSpace = this.cover(this.divideLine(this.#downSpace));

        return `${this.#upSpace}\n${this.#downSpace}`;
    }

    make(playersBridge, winBridge) {
        this.isU(playersBridge, winBridge);
        this.isD(playersBridge, winBridge);
    }

    isU(playersBridge, winBridge) {
        if (playersBridge === 'U') {
            this.#upSpace.push(playersBridge === winBridge ? 'O' : 'X');
            this.#downSpace.push(' ');
        }
    }

    isD(playersBridge, winBridge) {
        if (playersBridge === 'D') {
            this.#upSpace.push(' ');
            this.#downSpace.push(playersBridge === winBridge ? 'O' : 'X');
        }
    }

    emptySpace(space) {

    }

    divideLine(value) {
        return value.join(' | ');
    }

    cover(space) {
        return `${leftBlock}${emptySpace}${space}${emptySpace}${rightBlock}`;
    }

    // 사이사이 공백 넣기
    //사이사이 줄 넣기
}

module.exports = PlayersMap;
