const { PLAYERS_MAP } = require('./constants/settings')
const { START } = require('./constants/settings')

class PlayersMap {
    #upSpace;

    #downSpace;

    show(playersBridge, winBridge) {
        this.#upSpace = [];
        this.#downSpace = [];
        for (let i = START; i < playersBridge.length; i += PLAYERS_MAP.one_value) {
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
        if (playersBridge === PLAYERS_MAP.up) {
            this.#upSpace.push(playersBridge === winBridge ? PLAYERS_MAP.win : PLAYERS_MAP.fail);
            this.#downSpace.push(PLAYERS_MAP.empty);
        }
    }

    isD(playersBridge, winBridge) {
        if (playersBridge === PLAYERS_MAP.down) {
            this.#upSpace.push(PLAYERS_MAP.empty);
            this.#downSpace.push(playersBridge === winBridge ? PLAYERS_MAP.win : PLAYERS_MAP.fail);
        }
    }

    divideLine(value) {
        return value.join(' | ');
    }

    cover(space) {
        return `${PLAYERS_MAP.left_block}${PLAYERS_MAP.empty}${space}${PLAYERS_MAP.empty}${PLAYERS_MAP.right_block}`;
    }
}

module.exports = PlayersMap;
