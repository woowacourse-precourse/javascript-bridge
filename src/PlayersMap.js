const leftBlock = '[';
const rightBlock = ']';
const stage = '|';

class PlayersMap {
    #upSpace;

    #downSpace;

    constructor() {
        this.#upSpace = [];
        this.#downSpace = [];
    }

    show(playersBridge, winBridge) {
        for (let i = 0; i < playersBridge.length; i += 1) {
            if (playersBridge[i] === 'U') {
                this.#upSpace += playersBridge[i] === winBridge[i] ? 'O' : 'X';
                this.#downSpace += ' ';
            }

            if (playersBridge[i] === 'D') {
                this.#upSpace += ' ';
                this.#downSpace += playersBridge[i] === winBridge[i] ? 'O' : 'X';
            }
        }
        return `${this.cover(this.#upSpace)}\n${this.cover(this.#downSpace)}`;
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

let a = new PlayersMap();
a.show(['U','D','D','U'], ['U','D','D','D']);

// return `${up}\n${down}`